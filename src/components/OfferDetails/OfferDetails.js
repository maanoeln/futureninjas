import React, { Component } from 'react'
import styled from 'styled-components'

const OfferDetailsContainer = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 250px;
    border-radius: 20px;
`

export class OfferDetails extends Component {
    render() {
        return (
            <OfferDetailsContainer>
                {/* {props.length === 0 && <LoadingContainer>Carregando...</LoadingContainer>}
                {this.getPlaylistsDetails()} */}
                <button>Voltar</button>
            </OfferDetailsContainer>
        )
    }
}
