import React, { Component } from 'react'
import styled from 'styled-components'

const FilterContainer = styled.div`
  display: flex;  
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: lightseagreen;
`

export class Filters extends Component {
  render() {
    return (
      <FilterContainer>
        <h2>Filtros:</h2>
        <label>
          Valor minimo:
          <input />
        </label>

        <label>
          Valor máximo:
          <input />
        </label>

        <label>
          Título:
          <input />
        </label>

        <label>
          Descrição:
          <input />
        </label>
        
      </FilterContainer>
    )
  }
}
