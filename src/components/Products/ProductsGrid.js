import React, { Component } from 'react'
import { ProductCard } from './ProductCard'
import styled from 'styled-components'
import { Filters } from '../Filters/Filters'

const ProductGridContainer = styled.div`
    background: lightgray;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: auto;
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

  getJobs() {
    const jobs = this.props.handleOffers.map(offer => {
      return <ProductCard key={offer.id} offer={offer} theme={this.props.theme}/>
    })
    return jobs
  }

  render() {

      const jobList = (this.props.handleOffers.length === 0 ) ? <p>Vazio</p> : this.getJobs()

    return (
      <div>
        <SortingHeader>
          <p>Ofertas Cadastradas: 1500</p>
          <label>Ordenar:
            <Sorting>
              <option value=''> </option>
              <option value='ascending'>Crescente</option>
              <option value='descending'>Decrescente</option>
              <option value='nameAsc'>Nomes de A-Z</option>
            </Sorting>
          </label>
          <button onClick={this.onClickFilter}>Filtrar</button>
        </SortingHeader>
        {this.state.filters &&
        <Filters />}
        <ProductGridContainer>
          {jobList}
        </ProductGridContainer>
      </div>
    )
  }
}
