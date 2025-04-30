export default class MapaAgentes {
  constructor() {
    this.mapaGeneral = new Map();
    this.keysMapa = new Map(); // cada alias apunta a una clave principal
  }

  /**
   * Asigna un array de Keys a un value(Agente)
   * @param {Array} list
   */
  set(keys, value) {
    /* Tomamos una key principal (mainKey) como llave del agente y esta se asigna como key y value(Agente) */
    const mainKey = keys[0];
    this.mapaGeneral.set(mainKey, value);
    /* A nuestro keysMapa, agregamos cada una de las llaves que pueden apuntar a este agente(pero apuntan a la llave de mapaGeneral)
    Y asignamos diversas keys a esta key */
    for (const key of keys) {
      this.keysMapa.set(key, mainKey);
    }
  }


  /**
   * Asigna un array de Keys a un value(Agente)
   * Se pasa cualquier key y primero busca en el keysMapa, para saber que esta llave a quien puede apuntar.
   * Y con esta nueva mainKey ahora si busca en el MapaGeneral. Y devuelve el Agente.
   * @param {String} key
   * @return {Object} Agente
   */
  get(key) {
    const mainKey = this.keysMapa.get(key);
    return this.mapaGeneral.get(mainKey);
  }
}
