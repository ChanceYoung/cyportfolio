class Validator {
    #format
    #types_allowed
    constructor(format, types_allowed) {
        this.#format = new RegExp(format)
        this.#types_allowed = types_allowed
    }
    validate(label, value) {
        if (!this.#format.test(value))
            throw TypeError(`${label} did not have valid format`)
        if (this.#types_allowed.length > 0) {
            if (!this.#types_allowed.includes(typeof value))
                throw TypeError(`${label} is not an approved type`)
        }
        return true
    }
}
export default Validator
