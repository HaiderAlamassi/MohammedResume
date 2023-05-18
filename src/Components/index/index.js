import React from "react";

import About from './../About'
import Footer from './../Footer'
import Home from './../Home'
import Portfolio from './../Portfolio'
import Profile from './../Profile'
import SocialMedia from './../Socialmedia'
import Work from './../Work'

const Index = () => {
    return(
        <div>
            <Home />
            <Work />
            <Portfolio />
            <Profile />
            <About />
            <SocialMedia />
            <Footer />
        </div>
    )
}

export default Index;
