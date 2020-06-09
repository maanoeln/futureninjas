import React, { Component } from 'react'
import { ProductCard } from './ProductCard'
import styled from 'styled-components'
import { Filters } from '../Filters/Filters'

const ProductGridContainer = styled.div`
    background: lightgray;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 16px;
    gap: 16px;
`
const SortingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px;
`
const Sorting = styled.select`
  margin-left: 8px;
`

export class ProductGrid extends Component {
  state = {
    filters: false
  }

  onClickFilter = () => {
    this.setState({
      filters: !this.state.filters
    })
  }

  render() {

    const offers = this.props.handleOffers.map(offer => {
      return <ProductCard key={offer.id} 
                          offer={offer} 
              />
    
    })

    return (
      <fragment>
        <SortingHeader>
          <p>Ofertas Cadastradas: 1500</p>
          <label>Ordenar:
            <Sorting>
              <option value=''> </option>
              <option value='asc'>Crescente</option>
              <option value='desc'>Decrescente</option>
              <option value='alpha'>Nomes de A-Z</option>
            </Sorting>
          </label>
          <button onClick={this.onClickFilter}>Filtrar</button>
        </SortingHeader>
        {this.state.filters &&
        <Filters />}
        <ProductGridContainer>
          {this.props.handleOffers === 0 && <div>Carregando</div>}
          {offers}
          {/* {props === 'lista' ? {offers} : <ProductDetails handleOffers={this.props.handleOffers}
                                                          handleId={this.props.handleOffer.id}
                                                          /> */}
        </ProductGridContainer>
      </fragment>
    )
  }
}
