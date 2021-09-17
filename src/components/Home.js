import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
    color: red;
`

export default function Home() {

  const history = useHistory();

  const pizzaOrder = () => {
    history.push('/pizza')
  }

  return (
    <div className="homePage">
      <h3>We love Pizza!</h3>
      <StyledButton onClick={pizzaOrder} id="order-pizza">Get your Pizza Here!</StyledButton>
    </div>
  );
}