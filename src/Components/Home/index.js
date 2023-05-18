import React from 'react';

import { HomeSection , HomeInformation , HomeTitle , HomeInfo , HomeDesc , Span , HomeBtn } from'./style.js'

const Home = () => {
    return(
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Mohammed Alamassi</HomeTitle>
                    <HomeInfo>MidLine Manager</HomeInfo>
                    <HomeDesc>
                    A Team leader for warehouse
 <Span> logistics and administration</Span> with
deep understanding of supply chain
management. 
                    </HomeDesc>
                    <HomeBtn>My Portfoilo</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home;