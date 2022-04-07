import React from "react"
import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

type Props = {
    startTransparent?: boolean
}

const Layout: React.FC<Props> = ({ children, startTransparent }) => {
    return (
        <>
            <Header startTransparent={startTransparent} />
            <MainStyled startTransparent={startTransparent}>
                {children}
            </MainStyled>
            <Footer />
        </>
    )
}

const MainStyled = styled.main<Props>`
    ${props => !props.startTransparent && `
        padding-top: 89px;
        @media (min-width: 992px){
            padding-top: 151px;
        }
    `}
`

export default Layout
