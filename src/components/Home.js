import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model-S"
                bgimg="model-s.jpg"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model-Y"
                bgimg="model-y.jpg"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory" />
            <Section
                title="Model-3"
                bgimg="model-3.jpg"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory" />
            <Section
                title="Model-X"
                bgimg="model-x.jpg"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory" />
            <Section
                title="Lowest Cost Solar Panels"
                bgimg="solar-panel.jpg"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Learn More" />
            <Section
                title="Solar for New Roofs"
                bgimg="solar-roof.jpg"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Learn More" />
            <Section
                title="Accessories"
                bgimg="accessories.jpg"
                leftBtnText="Shop Now"/>
        </Container>
    )
}

export default Home

const Container = styled.div`
    color:red;
    height:100vh;
`
