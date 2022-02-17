import useInput from '../hooks/use-input'
import TextInput from './TextInput'
import { useState } from 'react'
import { onUserLogin } from '../Services/apiService'

const LoginForm = () => {
    const [isSuccess, setIsSuccess] = useState(false)
    const [wasSubmitted, setWasSubmitted] = useState(false)
    const username = useInput(
        'Username',
        'Cannot be empty',
        (value) => value.trim() !== ''
    )
    const password = useInput(
        'Password',
        'Cannot be empty',
        (value) => value.trim() !== ''
    )

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if ((username.isValid, password.isValid)) {
            setWasSubmitted(true)
            const success = await onUserLogin({ username, password })
            if (success) {
                setIsSuccess(true)
            } else {
                setIsSuccess(false)
            }
            username.reset()
            password.reset()
        }
    }

    return (
        <div className="mt-2">
            <h2>Chance Admin Login</h2>
            <form onSubmit={onSubmitHandler}>
                <TextInput inputControl={username} />
                <TextInput inputControl={password} type={'password'} />
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
            {isSuccess && wasSubmitted && (
                <div className="text-success pt-2">Successfully logged in!</div>
            )}
            {!isSuccess && wasSubmitted && (
                <div className="text-danger pt-2">That was not successful</div>
            )}
        </div>
    )
}

export default LoginForm
