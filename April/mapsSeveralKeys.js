/* const aliasMap = new Map();

const value = { name: 'Ana' };
const aliases = ['ana', 'a123', 'user42'];

for (const alias of aliases) {
  aliasMap.set(alias, value);
}
console.log(aliasMap);
console.log(aliasMap.get('a123')); // { name: 'Ana' } */



class MultiKeyMap {
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

const mkMap = new MultiKeyMap();
mkMap.set(['plazosPago', 'color', 'institucion'], { level: 99 });

console.log(mkMap.get('plazosPago')); // { level: 99 }
console.log(mkMap.get('institucion'));   // { level: 99 }
