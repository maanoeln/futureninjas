import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  background: lightblue;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5vh;
    padding: 0 10px;
`
export class Header extends Component {
  render() {
    return (
      <HeaderContainer>
          Headers
      </HeaderContainer>
    )
  }
}
