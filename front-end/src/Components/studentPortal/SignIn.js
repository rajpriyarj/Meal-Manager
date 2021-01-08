import React from 'react';

function Login({ onSignIn }) {
    return (
        <form className = "form--signin" 
            onSubmit = { event => {
                event.preventDefault()
                const elements = event.target.elements
                const libraryId = elements.libraryId.value
                const password = elements.password.value
                onSignIn({ libraryId, password })
            }}>
                <div className="form__group">
                    <label className="form__label form__label--padding">
                    {'Library Id'}
                    <input type="text" name="libraryId" className="form__input" required />
                    </label>
                </div>
                <div className="form__group">
                    <label className="form__label form__label--padding">
                    {'Password'}
                    <input type="password" name="password" className="form__input" required />
                    </label>
                </div>
                <button className="button button__form--submit">Login</button>
            </form>
    )
}

export default Login;