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
                <label>Titulo:</label><input name='title' value={this.props.valueTitle} onChange={this.props.handleInputChange}/>
                <label>Descrição:</label><input name='description' value={this.props.valueDescription} onChange={this.props.handleInputChange} />
                <label>Valor:</label><input name='price' value={this.props.valuePrice} onChange={this.props.handleInputChange} />
                <label>Formas de Pagamento:</label><input name='payment' value={this.props.valuePayment} onChange={this.props.handleInputChange} />
                <label>Prazo:</label><input name='date' value={this.props.valueDate} onChange={this.props.handleInputChange} />
                <div>
                    <button onClick={this.props.clearInput}>Limpar dados</button>
                    <button>Criar oferta</button>
                </div>
                
            </CreateOfferContainer>
        )
    }
}
