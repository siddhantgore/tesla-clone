import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <a href="/">Model-S</a>
                <a href="/">Model-Y</a>
                <a href="/">Model-3</a>
                <a href="/">Model-X</a>
                <a href="/">Solar Panel</a>
                <a href="/">Solar Roof</a>
            </Menu>
            <RightMenu>
                <a href="/">Shop</a>
                <a href="/">Account</a>
                <a href="/">Menu</a>
            </RightMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    position:fixed;
    display:flex;
    align-items:center;
    min-height:60px;
    padding:0 20px;
    left:0;
    right:0;
    top:0;
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    font-size: 14px;
`
const RightMenu = styled.div`
    font-size: 14px;
`

