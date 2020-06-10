import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductGrid } from '../Products/ProductsGrid'
import { CreateOffer } from '../CreateOffer/CreateOffer'
import axios from 'axios'

const LayoutFullContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
`

const HomePageContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 16px;
    flex-grow: 1;
`
const HomePageCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    min-width: 30vw;
    min-height: 30vh;
`
export class LayoutFull extends Component {

    state = {
        page: 'inicial',
        offers: [],

    }

    onClickGrid = () => {
        this.setState({
            page: 'grid'
        })
    }

    onClickCreate = () => {
        this.setState({
            page: 'create'
        })
    }

   
    createOffer = (title, description, value, payment, date) => {
        const body = {
            title: title,
            description: description,
            value: value,
            paymentMethods: payment,
            dueDate: date
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs', body
        )
        .then((response) => {
            
        })
        .catch((error) => {
            window.alert('Erro ao cadastrar oferta')
            console.log(error)
        })
    }


    renderPage = () => {
        switch(this.state.page){
            case 'grid':
                return <ProductGrid handleOffers ={this.state.offers} />
            
            case 'create':
                return <CreateOffer createOfferFunction={this.createOffer} />

            default: 
                return (<HomePageContainer>
                            <HomePageCard onClick={this.onClickCreate}>
                                Sou Cliente
                            </HomePageCard>
                            <HomePageCard onClick={this.onClickGrid}>
                                Sou Fornecedor
                            </HomePageCard>
                        </HomePageContainer>)
        }
    }

    render() {

        return (
            <LayoutFullContainer>
                {this.renderPage()}
            </LayoutFullContainer>
        )
    }
}
