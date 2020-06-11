import React, { Component } from 'react'
import styled from 'styled-components'
import {Typography, Button} from '@material-ui/core'
import { KeyboardBackspaceRounded, AttachMoney, CreditCard } from '@material-ui/icons'

const OfferDetailsContainer = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 50vh;
    padding: 0 8px;
`

export class OfferDetails extends Component {
    
    render() {
        
        const details = this.props.offerState

        const methods = details.paymentMethods.map(method => {
            if(method === 'card'){
                return <CreditCard />
            } else {
                return <AttachMoney />
            }
        })

        return (
            <OfferDetailsContainer>
                <Typography variant='h3'>{details.title}</Typography>
                <Typography variant='h4'>{details.description}</Typography>
                <Typography variant='h6'>{details.value}</Typography>
                <Typography variant='h6'>{details.dueDate}</Typography>
                <Typography variant='h6'>{methods}</Typography>
        <Button variant='contained' color='secondary' startIcon={<KeyboardBackspaceRounded />} size='large' onClick={this.props.handleList}>Voltar</Button>
            </OfferDetailsContainer>
        )
    }
}
