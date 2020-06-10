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
    state = {
        title: '',
        description: '',
        price: '',
        payment: [],
        date: ''
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name

        this.setState({
            [name]: value
        })

    }

    handleClickButton = () => {
        console.log(this.state)
        this.props.createOfferFunction(this.state.title, this.state.description, this.state.price, this.state.payment, this.state.date)
        this.setState({
            title: '',
            description: '',
            price: '',
            payment: [],
            date: ''
        })
    }


    render() {
        return (
            <CreateOfferContainer>
                <h1>Espaço do cliente</h1>
                <h3>Cadastra nova oferta</h3>
                <label>Titulo:</label><input name='title' value={this.state.title} onChange={this.handleInputChange}/>
                <label>Descrição:</label><input name='description' value={this.state.description} onChange={this.handleInputChange} />
                <label>Valor:</label><input type="number" name='price' value={this.state.price} onChange={this.handleInputChange} />
                <label>Formas de Pagamento:</label>
                <label>Crédito <input type='checkbox' name='payment' value={this.state.payment} onChange={this.handleInputChange} /></label>
                <label>Débito <input type='checkbox' name='payment' value={this.state.payment} onChange={this.handleInputChange} /></label>
                <label>Dinheiro <input type='checkbox' name='payment' value={this.state.payment} onChange={this.handleInputChange} /></label>
                <label>Prazo:</label><input type="date" name='date' value={this.state.date} onChange={this.handleInputChange} />
                <div>
                    <button onClick={this.handleClickButton}>Criar oferta</button>
                </div>
                
            </CreateOfferContainer>
        )
    }
}
