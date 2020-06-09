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
export class LayoutFull extends Component {
    render() {
        return (
            <LayoutFullContainer>
                <ProductGrid />
                <OfferDetails />
                <CreateOffer />
            </LayoutFullContainer>
        )
    }
}
