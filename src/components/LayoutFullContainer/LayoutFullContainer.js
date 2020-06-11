import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductGrid } from '../Products/ProductsGrid'
import { CreateOffer } from '../CreateOffer/CreateOffer'
import axios from 'axios'

const LayoutFullContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: auto;
`

const HomePageContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 16px;
    flex-grow: 1;
`
const HomePageCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    min-width: 30vw;
    height: 30vh;
`
export class LayoutFull extends Component {

    state = {
        page: 'initial',
        offers: [],

    }
    
    onClickBack = () => {
        this.setState({
            page: 'initial'
        })
    }

    onClickGrid = () => {
        this.props.showOfferBar()
        this.setState({
            page: 'grid'
        })
    }

    onClickCreate = () => {
        this.props.showOfferBar()
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
            window.alert('Oferta criada com sucesso! Boa sorte.')
            this.getOffer()
        })
        .catch((error) => {
            window.alert('Erro ao cadastrar oferta')
            console.log(error)
        })
    }
    
    componentDidMount() {
        this.getOffer()
    }

    componentDidUpdate() {
        this.getOffer()
    }

    getOffer = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs').then(response => {
            this.setState({
                offers: response.data.jobs
            })
        }).catch(e => {
            window.alert('Houve um erro ao carregar os dados.')
        })
    }

    renderPage = () => {
        switch(this.state.page){
            case 'grid':
                return <ProductGrid handleOffers ={this.state.offers}
                                    handleChange={this.handleInputChange}
                                    handleBack={this.onClickBack}
                                    />
            
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
