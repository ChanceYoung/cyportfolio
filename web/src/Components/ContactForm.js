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
            <div className='card col-md-4 bg-secondary m-2'>
            <div className='card-body'>
            <h2 className="card-title text-white mb-1">Contact Me</h2>
            <div className='card-text text-white mb-2'>Fill out this form and I will receive an email from you!</div>
            <form onSubmit={sendMessageHandler}>
                <TextInput inputControl={name} />
                <TextAreaInput inputControl={message} numRows={6} />
                <button className="btn btn-info">Send</button>
            </form>
            </div>
            </div>
    )
}



export default ContactForm
