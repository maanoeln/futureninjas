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
        date: '',
        credit: false,
        debit: false,
        cash: false

    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    handleCheckboxesChange = name => event => {
        
        console.log(this.state.payment)
        this.setState({ [name]: event.target.checked })
        if(this.state[name] === true) {
            this.setState({payment: [...this.state.payment, event.target.value]})
        } else {
            let paymentMethods = [...this.state.payment]
            let index = paymentMethods.indexOf(event.target.value)
            if(index > -1) {
                paymentMethods.splice(index, 1)
                this.setState({payment: paymentMethods})

            }
        }
      };

    handleClickButton = () => {
        this.props.createOfferFunction(this.state.title, this.state.description, this.state.price, this.state.payment, this.state.date)
        this.setState({
            title: '',
            description: '',
            price: '',
            payment: [],
            date: '',
            credit: true,
            debit: false,
            cash: false
        })
    }

    render() {
        return (
            <CreateOfferContainer>
                <h1>Espaço do cliente</h1>
                <h3>Cadastra nova oferta</h3>
                <label>Titulo:</label>
                <input 
                    name='title' 
                    value={this.state.title} 
                    onChange={this.handleInputChange}
                />
                <label>Descrição:</label>
                <input
                    name='description' 
                    value={this.state.description} 
                    onChange={this.handleInputChange} 
                />
                <label>Valor:</label>
                <input 
                    type="number" 
                    name='price' 
                    value={this.state.price} 
                    onChange={this.handleInputChange} 
                />
                <label>Formas de Pagamento:</label>
                <label>Crédito
                    <input 
                        type='checkbox'  
                        value='Crédito'
                        onChange={this.handleCheckboxesChange('credit')} 
                    />
                </label>
                <label>Débito 
                    <input
                        type='checkbox'  
                        value='Débito' 
                        onChange={this.handleCheckboxesChange('debit')} 
                    />
                </label>
                <label> Dinheiro 
                    <input 
                        type='checkbox' 
                        value='Dinheiro'
                        onChange={this.handleCheckboxesChange('cash')} 
                    />
                </label>
                <label>Prazo:</label><input type="date" name='date' value={this.state.date} onChange={this.handleInputChange} />
                <div>
                    <button onClick={this.handleClickButton}>Criar oferta</button>
                </div>
                
            </CreateOfferContainer>
        )
    }
}
