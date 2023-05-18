import React , { useState , useEffect } from 'react'
import axios from 'axios'
import { PortfolioSection , PortfolioTitle , Span , PortfolioList , ListItem , ImageWrapper , Img , Overlay , OverlaySpan } from './style.js'

const Portfolio = () => {

    const [ images , setImages ] = useState([])

    useEffect( () => {
        const loadData = () => axios.get('js/data.json')
            .then(res => setImages(res.data.portfolio))
        loadData()
    } , [])

    const RenderImages = images.map( imageItem => {
        return(
            <ImageWrapper key={imageItem.id}>
                <Img src={imageItem.image} alt="image + ${box.id}" />
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
        )
    })

    return(
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <ListItem active>All</ListItem>
                <ListItem>HTML</ListItem>
                <ListItem>Photoshop</ListItem>
                <ListItem>Wordpress</ListItem>
                <ListItem>Mobile</ListItem>
            </PortfolioList>
            {RenderImages}
        </PortfolioSection>
    )
}

export default Portfolio;