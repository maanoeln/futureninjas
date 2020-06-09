import React, { Component } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 250px;
  border-radius: 20px;
`

export class ProductCard extends Component {
  render() {
    return (
      <CardContainer>
        ProductCard
      </CardContainer>
    )
  }
}
