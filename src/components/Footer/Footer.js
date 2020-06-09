import React, { Component } from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    background: lightblue;
    height: 5vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;
`
export class Footer extends Component {
    render() {
        return (
        <FooterContainer>
            Filters
        </FooterContainer>
        )
    }
}
