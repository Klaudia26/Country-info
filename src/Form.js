import React from 'react';

const Form = (props) => {
    return (
        <form className="form" onSubmit={props.formSubmit}>
            <label className="form__label" htmlFor="country">Enter Country name:</label>
            <input className="form__input" type="text" id="country" placeholder="Ex: Afghanistan, Yemen, Italy" value={props.inputValue} onChange={props.inputChange} />
            <button className="form__btn">Add</button>
        </form>
    )
}

export default Form;
