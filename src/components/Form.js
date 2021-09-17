import React from 'react';

export default function PizzaOrderForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props


const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  return (
    <form id='pizza-form' onSubmit={onSubmit}>
      <div className='form-group submit'>

        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.topping1}</div>
          <div>{errors.topping2}</div>
          <div>{errors.special}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>Pizza information</h4>

        <label>Name&nbsp;
          <input
            id='name-input'
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>

        <label>Size&nbsp;
          <select
            id='size-dropdown'
            value={values.size}
            onChange={onChange}
            name='size'
            >
                <option value=''>- Select a size -</option>
                <option value='small'>S</option>
                <option value='medium'>M</option>
                <option value='large'>L</option>
                <option value='extraLarge'>XL</option>
            </select>
        </label>

        <label>Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.pepperoni}
            onChange= {onChange}
          />
        </label>

        <label>Banana Peppers
          <input
            type="checkbox"
            name="bananaPeppers"
            checked={values.bananaPeppers}
            onChange= {onChange}
          />
        </label>

        <label>Olives
          <input
            type="checkbox"
            name="olives"
            checked={values.olives}
            onChange= {onChange}
          />
        </label>

        <label>Sushi
          <input
            type="checkbox"
            name="sushi"
            checked={values.sushi}
            onChange= {onChange}
          />
        </label>

        <label>Special Instructions
          <input
            id='special-text'
            type="text"
            name="special"
            checked={values.special}
            onChange= {onChange}
          />
        </label>

        </div>


     <div>
        <h2>Happy with you choice of Pizza?</h2>
        <button id="order-button" disabled={disabled}>This is My Pizza</button>
     </div>
    </form>
  )
}