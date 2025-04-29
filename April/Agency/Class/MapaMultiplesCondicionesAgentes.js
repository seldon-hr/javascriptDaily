export default class MapaMultipleCondicionesAgentes {
  constructor() {
    this.map = new Map();
    this.keyMap = new Map(); // cada alias apunta a una clave principal
  }

  set(keys, value) {
    const mainKey = keys[0];
    this.map.set(mainKey, value);
    for (const key of keys) {
      this.keyMap.set(key, mainKey);
    }
  }

  get(key) {
    const mainKey = this.keyMap.get(key);
    return this.map.get(mainKey);
  }
}
