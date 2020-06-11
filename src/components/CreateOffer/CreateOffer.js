import React, { Component } from "react";
import styled from "styled-components";

import TextFields from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const BigContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const CreateOfferContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-space-between;
  align-items: center;
  width: 600px;
  height: auto;
  border-radius: 20px;
  border-color: black;
  box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  margin-bottom: 100px;
  padding-bottom: 20px;
`;

const Payment = styled.span`
  display: flex;
  flex-direction: column;

  padding: 30px;
`;

const Date = styled.span`
  display: flex;
  flex-direction: column;

  padding: 30px;
`;

const PaymentAndDate = styled.div`
  display: flex;
`;

export class CreateOffer extends Component {

  state = {
    title: "",
    description: "",
    price: "",
    payment: [],
    date: "",
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleClickButton = () => {
    console.log(this.state);
    this.props.createOfferFunction(
      this.state.title,
      this.state.description,
      this.state.price,
      this.state.payment,
      this.state.date
    );
    this.setState({
      title: "",
      description: "",
      price: "",
      payment: [],
      date: "",
    });
  };

  render() {
    return (
      <BigContainer>
        {" "}
        <h2>Espaço do cliente</h2>
        <CreateOfferContainer>
          <h3>Cadastre nova oferta</h3>

          <TextFields
            margin="normal"
            label="Titulo:"
            variant="outlined"
            autoFocus="false"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />

          <TextFields
            margin="normal"
            label="Descrição:"
            variant="outlined"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />

          <TextFields
            margin="normal"
            label="Valor:"
            variant="outlined"
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleInputChange}
          />
          <PaymentAndDate>
            {" "}
            <Payment>
              <label>Formas de Pagamento:</label>{" "}
              <label>
                Crédito
                <input
                  type="checkbox"
                  name="payment"
                  value={this.state.payment}
                  onChange={this.handleInputChange}
                />
              </label>
              <label>
                Débito{" "}
                <input
                  type="checkbox"
                  name="payment"
                  value={this.state.payment}
                  onChange={this.handleInputChange}
                />
              </label>
              <label>
                Dinheiro{" "}
                <input
                  type="checkbox"
                  name="payment"
                  value={this.state.payment}
                  onChange={this.handleInputChange}
                />{" "}
              </label>
            </Payment>
            <Date>
              <label>Prazo:</label>
              <TextFields
                variant="outlined"
                margin="normal"
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.handleInputChange}
              />
            </Date>
          </PaymentAndDate>

          <div>
            <Button
              onClick={this.handleClickButton}
              color="secondary"
              variant="contained"
              size="medium"
              margin-bottom="normal"
            >
              Criar oferta
            </Button>
          </div>
        </CreateOfferContainer>
      </BigContainer>
    );
  }
=======
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
