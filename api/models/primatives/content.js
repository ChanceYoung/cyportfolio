import Validator from '../validate.js'
const validator = new Validator('(.*?)', ['string'])
class Content {
    constructor(proposed_content) {
        if (validator.validate(proposed_content)) this.value = proposed_content
    }
}
export default Content
