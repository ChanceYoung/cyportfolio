import Validator from '../validate.js'
const validator = new Validator('[a-zA-Z]', ['string'])

class Author {
    constructor(proposed_author) {
        if (validator.validate('Author', proposed_author))
            this.value = proposed_author
    }
}
export default Author
