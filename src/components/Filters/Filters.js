import React, { Component } from 'react'
import styled from 'styled-components'

const FilterContainer = styled.div`
  display: flex;  
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #494949;
  border-top: 1px dashed white;
`

export class Filters extends Component {

  returnUpdatedMinValue = (event) => {
    const value = Number(event.target.value)

    const updatedValue = {
      'valMin': value
    }

    this.props.handleNumberChange(updatedValue)
  }

  returnUpdatedMaxValue = (event) => {
    const value = Number(event.target.value)

    const updatedValue = {
      'valMax': value
    }

    this.props.handleNumberChange(updatedValue)
  }

  render() {
    return (
      <FilterContainer>
        <h2>Filtros:</h2>
        <label>
          Valor minimo:
          <input name='valMin' min={0} onChange={this.returnUpdatedMinValue} />
        </label>

        <label>
          Valor máximo:
          <input name='valMax' onChange={this.returnUpdatedMaxValue} />
        </label>

        <label>
          Título:
          <input name='inputNameValue' value={this.props.titleValue} onChange={this.props.handleChange} />
        </label>

        <label>
          Descrição:
          <input name='inputDescValue' value={this.props.descValue} onChange={this.props.handleChange} />
        </label>
        
      </FilterContainer>
    )
  }
}
