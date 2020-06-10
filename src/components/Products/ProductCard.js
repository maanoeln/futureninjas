import React, { Component } from 'react'
import styled from 'styled-components'
import { Description, AttachMoney } from '@material-ui/icons'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core'

const CardStyle = styled(Card)`
  background: #f5f3fc;
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
    const raised = true

    return (
      <CardStyle elevation={raised ? 8:1}>
        <CardContent>
          <Typography color='primary' variant='h4' align="left">{offers.title}</Typography>
          <Typography color='secundary' variant='subtitle1' align='left'>{offers.description}</Typography>
          <Typography color='secundary' variant= 'body1' align='right'>Prazo: {offers.dueDate}</Typography>
        </CardContent>
        <CardActions>
          <Button variant='contained' size="small">informaçoes</Button>
        </CardActions>
      </CardStyle>
      // <CardContainer>
      //   <h1>{offers.title}</h1>
      //   <p>Descriçãp: {offers.description}</p>
      //   <p>Valor: {offers.value}</p>
      //   <p>Formas de pagamento:</p>
      //   {methods}
      //   <p>Prazo: {offers.dueDate}</p>
      //   <button>+ informacoes</button>
      // </CardContainer>
    )
  }
}
