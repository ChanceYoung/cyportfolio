import TextAreaInput from '../Inputs/TextAreaInput'
import TextInput from '../Inputs/TextInput'
import useInput from '../hooks/use-input'
import { sendEmailBody } from '../Services/apiService'

const ContactForm = () => {
    const name = useInput(
        'name',
        'I need to know who you are!',
        (value) => value.trim() !== ''
    )
    const message = useInput(
        'message',
        'Are you sure you want to send that empty?',
        (value) => value.trim() !== ''
    )

    const sendMessageHandler = (e) => {
        e.preventDefault()
        if (name.isValid && message.isValid) {
            const formMessage = {
                sender_name: name.value,
                message: message.value,
            }
            sendEmailBody(formMessage)
            name.reset()
            message.reset()
        }
    }

    return (
        <div className="card col-md-4 m-2">
            <h3 className="m-3">Contact Me!</h3>
            <form className="m-3" onSubmit={sendMessageHandler}>
                <TextInput inputControl={name} />
                <TextAreaInput inputControl={message} numRows={6} />
                <button className="btn btn-primary">Send</button>
            </form>
        </div>
    )
}

export default ContactForm
