import React, { Component } from 'react'
import styled from 'styled-components'

const CreateOfferContainer = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 250px;
    border-radius: 20px;
`

export class CreateOffer extends Component {
    render() {
        return (
            <CreateOfferContainer>
                CreateOffer
                <button>Limpar dados</button>
                <button>Criar oferta</button>
            </CreateOfferContainer>
        )
    }
}
