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
        title: '',
        description: '',
        price: '',
        payment: [],
        date: '',
        sort: ''
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

    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    clearInput = () => {
        this.setState({
            title: '',
            description: '',
            price: '',
            date: '',
            payment:''
        })
    }

    componentDidMount() {
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

    sortOffers = (offerOne, offerTwo) => {
        const sortConfig = this.state.sort

        if(sortConfig === 'ascending') {
            return offerOne.price - offerTwo.price
        } else if ( sortConfig === 'descending') {
            return offerTwo.price - offerOne.price
        } else if(sortConfig === 'nameAsc'){
            const offerOneTitle = offerOne.title
            const offerTwoTitle = offerTwo.title
            
            return offerOneTitle.localeCompare(offerTwoTitle)
        }
    }


    renderPage = () => {
        switch(this.state.page){
            case 'grid':
                return <ProductGrid handleOffers ={this.state.offers}
                                    theme={this.props.theme}/>
            
            case 'create':
                return <CreateOffer valueTitle = {this.state.title}
                                    valueDescription = {this.state.description}
                                    valuePrice = {this.state.price}
                                    valuePayment = {this.state.payment}
                                    valueDate ={this.state.date}
                                    handleInputChange={this.handleInputChange}
                                    clearInput={this.clearInput}
                                    />

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
