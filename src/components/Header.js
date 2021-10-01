import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

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
            <CustomMenu/>
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
    justify-content:space-between;
    @media (max-width:980px){  
        padding:0 5px;
    }
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    font-size: 14px;
    @media (max-width:980px){  
        display:none;
    }
`
const RightMenu = styled.div`
    display:flex;
    align-items:center;
    font-size: 14px;
`
const CustomMenu=styled(MenuIcon)`
    cursor:pointer;
`
