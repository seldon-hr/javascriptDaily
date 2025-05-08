/* Se puede hacer esto al parecer */
dispatch('cotizadorInstanciasSaludController/detectarCambiosCamposDinamicos', campo, { root: true })
      .then(() => {
        console.log('[detectarAgente] dispatch completo para detectarCambiosCamposDinamicos');
      })
      .catch(err => {
        console.error('[detectarAgente] error en dispatch:', err);
      });

/* Es decir una promesa una vez que un dispatch concluye. */





/* uso de un watch para varialbes del store(vuex) */

const store = createStore({
    modules: {
        agentesCotizadoresController
    }
})

// WATCHER global sobre el mapa
store.watch(
  state => state.agentesCotizadoresController.mapaAgentes,
  (nuevoMapa, viejoMapa) => {
    console.log('mapaAgentes cambió:', { nuevoMapa, viejoMapa })
    // aquí puedes despachar acciones, commits, etc.
  },
  { deep: true, immediate: true }
)