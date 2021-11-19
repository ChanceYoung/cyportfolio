const TextAreaInput = ({ inputControl, numRows }) => {
    const inputClasses = inputControl.hasError
        ? 'form-control is-invalid h-100'
        : 'form-control h-100'

    return (
        <div className="col form-floating mb-3">
            <textarea
                className={inputClasses}
                id={inputControl.name}
                value={inputControl.value}
                rows={numRows}
                onChange={inputControl.valueChangeHandler}
                onBlur={inputControl.inputBlurHandler}
                placeholder={inputControl.name}
            />
            <label htmlFor={inputControl.name}>{inputControl.name}</label>
            {inputControl.hasError && (
                <p className="invalid-feedback">{inputControl.error}</p>
            )}
        </div>
    )
}

export default TextAreaInput
