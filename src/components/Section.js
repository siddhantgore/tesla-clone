import React from 'react'
import styled from 'styled-components'

function Section(props) {
    return (
        <Wrap bgImg={props.bgimg}>
             <ItemText>
                 <h1>{props.title}</h1><br/>
                 <p>{props.description}</p>
             </ItemText>
             <Buttons>
             <ButtonGroup>
                 <LeftButton>
                 {props.leftBtnText}
                 </LeftButton>
                {
                  props.rightBtnText &&
                  <RightButton>
                      {props.rightBtnText}
                  </RightButton>          
                }
             </ButtonGroup>
             <DownArrow src="/images/down-arrow.svg" />
             </Buttons>
        </Wrap>
    )
}

export default Section
const Wrap=styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image:${props => `url("/images/${props.bgImg}")`};
  
`

const ItemText=styled.div`
    padding-top:15vh;
` 
const ButtonGroup=styled.div`
    display:flex;
    justify-content:center;
    align-item:center;
    margin-bottom:30px;
    @media (max-width:750px){  
        flex-direction:column;
    }
`
const LeftButton=styled.div`
    background-color:#181b21;
    height:40px;
    width:256px;
    color:white;
    border-radius: 100px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 auto;
    margin:15px;
    text-align:center;
    opacity: 0.85;
    text-transform:uppercase;
    font-size:12px;
    font-weight:600;
    cursor:pointer;

`
const RightButton=styled(LeftButton)`
    background-color:white;
    opacity:0.65;
    color:black;
`
const DownArrow=styled.img`
    margin-top:20px;
    height:40px;
    animation:animateDown infinite 1.5s;
`

const Buttons=styled.div``