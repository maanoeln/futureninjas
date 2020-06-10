import React, { Component } from 'react'
import styled from 'styled-components'
import { Header } from './Header/Header'
import { OfferTypes } from './OfferTypes/OfferTypes'
import { LayoutFull } from './LayoutFullContainer/LayoutFullContainer'
import { Footer } from './Footer/Footer'

const WrapAll = styled.div`
  display: flex;
  flex-direction: column;
  min-height: auto;
`

export class AppContainer extends Component {
  render() {
    return (
      <WrapAll>
        <Header />
        <OfferTypes />
        <LayoutFull />
        <Footer />
      </WrapAll>
    )
  }
}
