import React, { Component } from 'react'
import styled from 'styled-components'
import {Typography, Button, Fab} from '@material-ui/core'
import { KeyboardBackspaceRounded, AttachMoney, CreditCard} from '@material-ui/icons'

const OfferDetailsContainer = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 30vh;
    padding: 0 8px;
`
const ValueDueContainer = styled.div`
    width: 25%;
    display: flex;
    justify-content: space-between;
`

const BackContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
const GeneralContainer= styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    padding: 16px;
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

        const taken = details.taken ? 'Desistir da oferta' : 'Pegar oferta'

        return (
            <OfferDetailsContainer>
                <Typography color='secondary' variant='h3'>{details.title}</Typography>

                <GeneralContainer>
                    <Typography color='primary' variant='h4'>{details.description}</Typography>
                </GeneralContainer>

                <ValueDueContainer>
                    <Typography color='primary' variant='h6'>Valor: {details.value}</Typography>
                    <Typography color='primary' variant='h6'>Prazo: {details.dueDate}</Typography>
                </ValueDueContainer>

                    <Typography variant='h6'>Formas e pagamento:</Typography>

                <GeneralContainer>
                {methods}
                </GeneralContainer>
                    
                <GeneralContainer>
                    <Button variant='contained' color='secondary' size='large'>{taken}</Button>
                </GeneralContainer>
                
                <BackContainer>
                    <Fab color='primary' variant="extended" onClick={this.props.handleList} >
                        <KeyboardBackspaceRounded color='secondary'/>
                        Voltar
                    </Fab>
                </BackContainer>
                    </OfferDetailsContainer>
        )
    }
}
