import React, { Component } from 'react'
import styled from 'styled-components'

const CreateOfferContainer = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    border-radius: 20px;
`

export class CreateOffer extends Component {
    render() {
        return (
            <CreateOfferContainer>
                <h1>Espaço do cliente</h1>
                <h3>Cadastra nova oferta</h3>
                <label>Titulo:</label><input />
                <label>Descrição:</label><input />
                <label>Valor:</label><input />
                <label>Prazo:</label><input />
                <label>Formas de Pagamento:</label><input />
                <div>
                    <button>Limpar dados</button>
                    <button>Criar oferta</button>
                </div>
                
            </CreateOfferContainer>
        )
    }
}
