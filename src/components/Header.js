import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux'

function Header() {
    const [NavStatus, setNav] = useState(false);
    const cars = useSelector(selectCars)
    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a key={index} href="/">{car}</a>
                ))}
                <a href="/">Solar Panel</a>
                <a href="/">Solar Roof</a>
            </Menu>
            <RightMenu>
                <a href="/">Shop</a>
                <a href="/">Account</a>
                <a href="/">Menu</a>
            </RightMenu>
            <CustomMenu onClick={() => setNav(true)} />
            <Nav show={NavStatus}>
                <CloseWrap>
                    <Close onClick={() => setNav(false)} />
                </CloseWrap>
                <li><a href="/">Existing Inventory</a></li>
                <li><a href="/">Used Inventory</a></li>
                <li><a href="/">Trade-In</a></li>
                <li><a href="/">Test Drive</a></li>
                <li><a href="/">Cybertruck</a></li>
                <li><a href="/">Roadster</a></li>
                <li><a href="/">Semi</a></li>
                <li><a href="/">Charging</a></li>
                <li><a href="/">Powerwall</a></li>
                <li><a href="/">Commercial Energy</a></li>
                <li><a href="/">Utilities</a></li>
                <li><a href="/">Find Us</a></li>
                <li><a href="/">Support</a></li>
            </Nav>
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
    font-weight:700;
    left:0;
    right:0;
    top:0;
    a img{
        padding-left:50px
    }
    justify-content:space-between;
    @media (max-width:980px){  
        padding:0 5px;
        a img{
            padding-left:0px
        }
    }
    z-index:1;
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
const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`
const Nav = styled.div`
    position:fixed;
    top:0;
    buttom:0;
    right:0;
    background:white;
    width:300px;
    height:100vh;
    z-index:2;
    list-style:none;
    padding:20px;
    text-align:left;
    transform:${props => props.show ? "translateX(0)" : "translateX(100%)"};
    transition:transform 0.3s ease-out;
    li{
        padding:15px;
        font-weight:700;
        font-size:14px;
    }
`
const Close = styled(CloseIcon)`
    cursor:pointer;
`
const CloseWrap = styled.div`
    display:flex;
    justify-content:flex-end;
`