import React, { Component } from 'react'
import styled from 'styled-components'
import { Description, AttachMoney } from '@material-ui/icons'

const CardContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  min-height: 250px;
  border-radius: 20px;
  padding: 8px;
`

export class ProductCard extends Component {

  render() {

    const methods = this.props.offer.paymentMethods.map(method => {
      if(method === 'card'){
        return <Description />
      } else {
        return <AttachMoney />
      }
    })

    const offers = this.props.offer

    return (
      <CardContainer>
        <h1>{offers.title}</h1>
        <p>Descriçãp: {offers.description}</p>
        <p>Valor: {offers.value}</p>
        <p>Formas de pagamento:</p>
        {methods}
        <p>Prazo: {offers.dueDate}</p>
        <button>+ informacoes</button>
      </CardContainer>
    )
  }
}
