import React from 'react';

import { CreativeSection , Info , Title , Span , Director , Description , Anchor } from './style.js'

const About = () => {
    return(
        <CreativeSection>
            <div className="container">
                <Info>
                    <Title><Span>This is</Span> Me</Title>
                    <Director>Creative Director</Director>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor>explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Description>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Description>
                </Info>
            </div>
        </CreativeSection>
    )
}

export default About;