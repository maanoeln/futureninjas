import React, { Component } from 'react'
import styled from 'styled-components'
import TableFooter from '@material-ui/core/TableFooter';
import Typography  from '@material-ui/core/Typography'
import { Instagram, Facebook, WhatsApp, LinkedIn, YouTube } from '@material-ui/icons';



const StyledTipography = styled(Typography)`
   color: #8762D1;
`

const FooterContainer = styled(TableFooter)`
    
    background: white;
    color: #8762D1;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
`
export class Footer extends Component {
    render() {
        return (
            <>
                <FooterContainer>
                  <Facebook />
                  <Instagram />
                  <YouTube />
                  <LinkedIn />
                  <WhatsApp />
                  </FooterContainer>
                <FooterContainer>  
                  <StyledTipography  variant='h8' >
                    ©2020, FutureNinjas Serviços de Internet. CNPJ 00.000.000/0000-00 - Av. Labenu, 001 - Labenu - Brasil.
                  </StyledTipography>
                </FooterContainer>
            </>
        )
    }
}
