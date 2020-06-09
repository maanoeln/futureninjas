import React, { Component } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  min-height: 250px;
  border-radius: 20px;
`

export class ProductCard extends Component {
  render() {
    const offers = this.props.offer
    return (
      <CardContainer>
        <h1>{offers.title}</h1>
        <p>Descriçãp: {offers.description}</p>
        <p>Valor: {offers.value}</p>
        <p>Formas de pagamento:{offers.paymentMethods}</p>
        <p>Prazo: {offers.dueDate}</p>
        <button>+ informacoes</button>
      </CardContainer>
    )
  }
}
