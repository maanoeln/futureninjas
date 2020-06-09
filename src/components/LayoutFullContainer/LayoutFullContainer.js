import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductGrid } from '../Products/ProductsGrid'
import { Filters } from '../Filters/Filters'

const LayoutFullContainer = styled.div`
    display: grid;
    grid-template-columns: 4fr 0.75fr;
`
export class LayoutFull extends Component {
    render() {
        return (
            <LayoutFullContainer>
                <ProductGrid />
                <Filters />
            </LayoutFullContainer>
        )
    }
}
