import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductGrid } from '../Products/ProductsGrid'
import { OfferDetails } from '../OfferDetails/OfferDetails'
import { CreateOffer } from '../CreateOffer/CreateOffer'

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

const ofertas = [
    {
        title: 'Website',
        description: 'app em react',
        value: 20,
        paymentMethods: ['cartao', 'dinheiro'],
        dueDate: 12062020
    },
    {
        title: 'limpeza',
        description: 'limpeza domiciliar',
        value: 10,
        paymentMethods: ['cartao', 'dinheiro'],
        dueDate: 12062020
    },
    {
        title: 'conserto',
        description: 'consertar parede',
        value: 15,
        paymentMethods: ['cartao', 'dinheiro'],
        dueDate: 12062020
    },
    {
        title: 'conserto',
        description: 'consertar parede',
        value: 15,
        paymentMethods: ['cartao', 'dinheiro'],
        dueDate: 12062020
    }
]
export class LayoutFull extends Component {

    state = {
        page: 'inicial',
        offers: ofertas,
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

    renderPage = () => {
        switch(this.state.page){
            case 'grid':
                return <ProductGrid handleOffers ={this.state.offers} />
            
            case 'create':
                return <CreateOffer />

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
