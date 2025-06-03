<template>
  <v-row justify="center">
    <v-dialog v-model="dialogModalReadDoc" persistent max-width="1000px">
      <template v-slot:activator="{ on, attrs }">
        <v-sheet
          v-bind="attrs"
          v-on="on"
          color="transparent"
          class="rounded-circle pa-1 pb-3"
          hover
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-badge
                :color="
                  tipoPersona === tipoPersonaFisica
                    ? 'grey'
                    : saveDocuments
                    ? 'success'
                    : 'warning'
                "
                dot
              >
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  :disabled="tipoPersona === tipoPersonaFisica"
                >
                  mdi-page-next-outline
                </v-icon>
              </v-badge>
            </template>
            <span>Lectura de documentos</span>
          </v-tooltip>
        </v-sheet>
      </template>
      <v-card elevation="0" class="ma-0 pa-0" :overflow="false">
        <v-card-title class="text-h5 secondary--text">Documentos</v-card-title>
        <v-card-text>
          <div
            v-for="formulario in listFormulariosDocumentos"
            :key="formulario.id"
          >
            <v-form
              :ref="formulario.configuracionFormulario.nombre"
              lazy-validation
            >
              <v-row dense>
                <v-col cols="12" md="12">
                  <v-sheet
                    rounded="lg"
                    class="py-1 px-2"
                    height="auto"
                    color="primary"
                  >
                    <v-icon small left color="white">mdi-form-select</v-icon>
                    <span class="text-body-2 font-weight-light white--text"
                      >{{ formulario.configuracionFormulario.titulo }}:</span
                    >
                  </v-sheet>
                </v-col>
                <component-dinamico
                  v-for="(campo, index) in formulario.configuracionFormulario
                    .configuracionCotizadorList"
                  :key="index"
                  v-model="campo.valor"
                  :campo="campo"
                  class="pb-0 mb-n2"
                />
                <v-row
                  v-if="
                    formulario.configuracionFormulario.nombre == 'FRMFILEUPLOAD'
                  "
                >
                  <v-container>
                    <!-- Select condicional -->
                    <v-row class="my-lg-n3">
                      <c-select-regimen-fiscal
                        v-if="seVaAFacturar"
                        v-model="tipoFactura"
                        class="pa-4"
                      />
                    </v-row>
                    <v-row class="mt-n4">
                      <v-col cols="4">
                        <c-switch
                          v-model="isINEDireccionVigente"
                          :label="
                            'INE con dirección vigente: ' +
                            (isINEDireccionVigente ? 'Sí' : 'No')
                          "
                          dense
                          class="caption xs"
                        ></c-switch>
                      </v-col>

                      <v-col cols="3">
                        <c-switch
                          v-model="seVaAFacturar"
                          :label="
                            'Se va a facturar: ' + (seVaAFacturar ? 'Sí' : 'No')
                          "
                          dense
                          class="caption xs"
                        ></c-switch>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-col cols="4">
                    <v-btn
                      color="primary"
                      block
                      outlined
                      small
                      @click="onAgregarDocumento()"
                    >
                      Agregar Documento
                    </v-btn>
                  </v-col>
                </v-row>
                <v-col
                  v-if="
                    formulario.configuracionFormulario.nombre == 'FRMFILEUPLOAD'
                  "
                  cols="12"
                  md="12"
                >
                  <v-data-table
                    :items-per-page="listDocumentos.length"
                    :headers="headersDocumentos"
                    :items="listDocumentos"
                    :disable-filtering="true"
                    dense
                    hide-default-footer
                    class="elevation-3 mb-5 customheader"
                  >
                    <template v-slot:[`item.documento`]>
                      <span>{{ "Documento" }}</span>
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            v-bind="attrs"
                            v-on="on"
                            small
                            elevation="0"
                            color="transparent"
                            class="ma-1 rounded-pill"
                            hide-default-footer
                            @click="onRemoveDocumento(item)"
                          >
                            <v-icon small>mdi-trash-can</v-icon>
                          </v-btn>
                        </template>
                        <span>Eliminar Documento</span>
                      </v-tooltip>
                    </template>
                  </v-data-table>
                  <v-row class="pb-2">
                    <c-confirm-button-small
                      :offsetmd="6"
                      :cols="3"
                      :loading="loadingSendDocumentos"
                      :disabled="loadingSendDocumentos || loadingRecoverInfo"
                      text="Guardar"
                      :color="primary"
                      tooltip="Guardar Documento(s)"
                      @click="onSaveDocuments()"
                    />
                    <c-confirm-button-small
                      :disabled="!saveDocuments || loadingRecoverInfo"
                      :loading="loadingRecoverInfo"
                      :cols="3"
                      text="Validar Documentos"
                      :color="primary"
                      tooltip="Llenar campos con información recuperada"
                      @click="onRecoverInfo()"
                    />
                  </v-row>
                </v-col>
              </v-row>
            </v-form>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-row>
            <c-divider color="primary"></c-divider>
            <c-cancel-button
              :cols="12"
              :md="2"
              :offsetmd="8"
              text="Cancelar"
              tooltip="Cancelar"
              @click="dialogModalReadDoc = false"
            />
            <c-confirm-button
              :cols="12"
              :md="2"
              :disabled="!saveDocuments"
              text="Aceptar"
              tooltip="Aceptar"
              @click="onContinuar()"
            />
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import CSelectAsegurados from "./CSelectAsegurados.vue";
export default {
  data() {
    return {
      tipoPersonaFisica: "1",
      dialog: false,
      rules: {
        required: (val) => (val && !!val.trim()) || "Este campo es requerido.",
      },
      props: {
        active: { type: Boolean, default: true },
      },
      options: {
        prefix: "$",
        suffix: "",
        precision: 3,
      },
      auxMarca: "",
      camposObject: [
        "ccEstado",
        "estado",
        "ccEstadoF",
        "ccEntidadFederativaF",
        "ccPaisNacimiento",
        "ccOcupacion",
        "ccCodigoPostal",
        "ccTipoIdentificacion",
        "ccTipoIdentificacionF",
      ],
    };
  },
  components: {
    CSelectAsegurados,
  },
  mounted() {},
  methods: {
    ...mapActions("app", ["showAppMessage"]),
    ...mapActions("cotizadorInstanciasSaludController", ["updateTipoPersona"]),
    ...mapActions("modalReadDocsSalud", [
      "agregarDocumento",
      "quitarDocumento",
      "procesarDocumentos",
      "recoverInfo",
      "upadteDialogModalReadDoc",
      "updateTipoPersona",
    ]),

    ...mapMutations("modalReadDocsSalud", [
      "mutateSeVaAFacturar",
      "mutateIsINEDireccionVigente",
    ]),

    onContinuar() {
      if (this.seVaAFacturar && !this.tipoFactura) {
        this.showAppMessage({
          text: "Por favor selecciona un tipo de régimen fiscal.",
          timer: "3000",
          type: "warning",
        });
        return;
      }

      /* if (this.seVaAFacturar) {
        this.$store.dispatch(
          "cotizadorInstanciasSaludController/obtenerValoresCuestionario492",
          { tipoFactura: this.tipoFactura }
        );
      } */

      this.upadteDialogModalReadDoc(false);
      this.onRecoverInfo();
    },

    onAgregarDocumento() {
      const formValido = this.$refs.FRMFILEUPLOAD[0].validate();
      if (formValido) {
        this.agregarDocumento();
        this.$refs.FRMFILEUPLOAD[0].resetValidation();
      } else {
        const message = {
          text: "Faltan campos requeridos, por favor revisa la información",
          timer: "3000",
          type: "warning",
        };
        this.showAppMessage(message);
      }
    },

    onRemoveDocumento(item) {
      this.quitarDocumento(item.id);
    },

    //---Guardar Documentos---
    onSaveDocuments() {
      //Función que se ejecuta después de que se agregaron los documentos
      this.procesarDocumentos();
    },

    //---Recuperar Información---
    onRecoverInfo() {
      this.recoverInfo();
    },

    sendMessage() {
      const message = {
        text: "Faltan campos requeridos, por favor revisa la información",
        timer: "3000",
        type: "warning",
      };
      this.showAppMessage(message);
      this.$vuetify.goTo(210);
    },
  },

  computed: {
    ...mapState({
      formularios: "modalReadDocsSalud",
    }),
    ...mapState({
      cotizador: "cotizadorInstanciasSaludController",
    }),

    listDocumentos() {
      return this.formularios.listDocumentos;
    },

    search() {
      return this.formularios.search;
    },
    //---Del State---
    listFormulariosDocumentos() {
      return this.cotizador.listFormulariosDocumentos;
    },
    headersDocumentos() {
      return this.formularios.headersDocumentos;
    },
    loadingSendDocumentos() {
      return this.formularios.loadingSendDocumentos;
    },
    saveDocuments() {
      return this.formularios.saveDocuments;
    },
    loadingRecoverInfo() {
      return this.formularios.loadingRecoverInfo;
    },

    dialogModalReadDoc: {
      get() {
        return this.formularios.dialogModalReadDoc;
      },
      set(valor) {
        this.upadteDialogModalReadDoc(valor);
      },
    },
    seVaAFacturar: {
      get() {
        return this.formularios.seVaAFacturar;
      },
      set(valor) {
        this.mutateSeVaAFacturar(valor);
      },
    },

    isINEDireccionVigente: {
      get() {
        return this.formularios.isINEDireccionVigente;
      },
      set(valor) {
        this.mutateIsINEDireccionVigente(valor);
      },
    },

    tipoPersona: {
      get() {
        return this.cotizador.tipoPersona;
      },
      set(value) {
        this.updateTipoPersona(value);
      },
    },
  },
};
</script>

<style scoped>
.ma-1 {
  margin: 4px !important;
}
.ml-2 {
  margin-left: 8px !important;
}
.mt-0 {
  margin-top: 0 !important;
}
.button-hover:hover {
  border-radius: 50%;
  background-color: aquamarine;
}

.customheader .v-data-table__wrapper .v-data-table-header th {
  white-space: nowrap;
  background-color: var(--v-secondary-base) !important;
  color: white !important;
}
</style>
