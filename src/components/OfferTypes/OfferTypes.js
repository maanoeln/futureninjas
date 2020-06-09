import React, { Component } from 'react'
import styled from 'styled-components'

const OfferTypesContainer = styled.div`
    background: lightgoldenrodyellow;
    border: 1px solid black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 8vh;

    p {
        align-self: center;
    }
`
export class OfferTypes extends Component {
  render() {
    return (
      <OfferTypesContainer>
          <p>Serviço 1</p>
          <p>Serviço 2</p>
          <p>Serviço 3</p>
      </OfferTypesContainer>
    )
  }
}
