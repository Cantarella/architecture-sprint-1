class GlobalStore {
  _store = {};
  constructor() {
  }
  add(key, reducer, actions) {
    if (key && typeof key === 'string') {
      this._store[key] = {};
      this._store[key].store = reducer
      this._store[key].actions = actions
    }
  }
  getStore(key) {
    return this._store[key]
  }
  getStoresList(keys) {
    const result = {};
    keys.forEach(key => {
      result[key] = this._store[key];
    })
    return result
  }
}

const GlobalStoreIns = new GlobalStore()

export default GlobalStoreIns;