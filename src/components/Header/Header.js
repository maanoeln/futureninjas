import React, { Component } from 'react'
import styled from 'styled-components'
import ninja from './ImgNinja.png'
import { LayoutFull } from '../LayoutFullContainer/LayoutFullContainer'

const HeaderContainer = styled.div`
  background: lightblue;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 15vh;
    padding: 0 10px;
`

const Image = styled.img`
  width: 7vw;
  height: 13vh;
`

export class Header extends Component {
  render() {
    return (
      <HeaderContainer>
          <a href="/"><Image src={ninja} alt="Logo"/></a>
      </HeaderContainer>
    )
  }
}
