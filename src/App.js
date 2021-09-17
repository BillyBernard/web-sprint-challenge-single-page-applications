import React, {useState, useEffect} from "react";
import {Route, Link} from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './validation/formSchema';
import Form from './components/Form';
import Home from './components/Home';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 4em;
  text-align: center;
  background-color: red;
`


const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  bananaPeppers: false,
  olives: false,
  sushi: false,
  special: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  special: '',
}

const initialOrder = [];
const initialDisabled = true;

const App = () => {
  const [pizzaOrder, setPizzaOrder] = useState(initialOrder);
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  // const getOrder = () => {
  //   axios.get('https://reqres.in/api/orders')
  //     .then(res => {
  //       //console.log(res.data);
  //     }).catch(err => console.log(err))
  // }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      console.log(res.data);
      setPizzaOrder([res.data, ...pizzaOrder]);
      setFormValues(initialFormValues);
    }).catch(err => {
      console.log(err);
      setFormValues(initialFormValues);
    })
    
      
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
    name: formValues.name.trim(),
    size: formValues.size,
    pepperoni: formValues.pepperoni,
    bananaPeppers: formValues.bananaPeppers,
    olives: formValues.olives,
    sushi: formValues.sushi,
    special: formValues.special.trim(),
    }

    postNewOrder(newOrder);
  }

  // useEffect(() => {
  //   getOrder()
  // }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='App'>
      <nav>
        <StyledH1>Bada-Bing Pizza</StyledH1>
        <div className='nav-links'>
          <Link to="/">Home Page</Link>
        </div>
      </nav>

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pizza">
          <Form 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
    </div>
  );
};
export default App;
