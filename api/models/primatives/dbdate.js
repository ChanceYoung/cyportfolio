class DbDate {
    #format = new RegExp('([0-9]{4})-([0-9]{2})-([0-9]{2})')
    constructor(proposed_date) {
        if (!this.#validate(proposed_date))
            throw TypeError('Incorrect Date format')
        this.value = proposed_date
    }
    #validate(proposed_date) {
        return this.#format.test(proposed_date)
    }
}
export default DbDate
