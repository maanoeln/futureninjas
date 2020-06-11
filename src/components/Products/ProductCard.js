import React, { Component } from 'react'
import styled from 'styled-components'
import { Description, AttachMoney } from '@material-ui/icons'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core'
import axios from 'axios'

const CardStyle = styled(Card)`
  background: white;
  min-height: 20vh;
  transform: scale(1.0);
  transition: 0.4s ; 

  :hover {
    transform: scale(1.05);
    transition: 0.4s;
  }
`

export class ProductCard extends Component {

  getOfferDetails = id => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs/${id}`).then(response =>{
      this.setState({
        offers: response.data.jobs
      })
    }).catch(e => {
      window.alert('Houve um erro ao abrir a oferta!')
    })

  }

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
          <Button color="secondary" variant='contained' size="small" onClick={() => this.getOfferDetails(offers.id)}>informaçoes</Button>
        </CardActions>
      </CardStyle>
    )
  }
}
