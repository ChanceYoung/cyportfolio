class DbId {
    constructor(id) {
        if (!this.#validateInput(id)) {
            throw TypeError('Invalid database id')
        }
        this.value = id
        Object.freeze(this)
    }
    #validateInput = id => {
        if (typeof id !== 'number') return false
        if (id > 0) return true
    }
}
Object.freeze(DbId.prototype)
export default DbId
