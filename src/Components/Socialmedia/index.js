import { React , useState , useEffect } from 'react'

import axios from 'axios'
import { SocialMediaSection , Social , Icon , Info , Title , InfoBody } from './style.js'

const SocialMedia = () => {

    const [ social , setSocial ] = useState([])

    useEffect(() => {
        const loadData = () => axios.get('js/data.json')
            .then(res => setSocial(res.data.social))
        loadData()
        } , [])

    const renderSocial = social.map( socialItem => {
        return(
            <Social order={socialItem.id} key={socialItem.id}>
                <Icon className={socialItem.icon}></Icon>
                <Info>
                    <Title>{socialItem.title}</Title>
                    <InfoBody>{socialItem.body}</InfoBody>
                </Info>
            </Social>
        )
    })

    return(
        <SocialMediaSection>
            {renderSocial}
        </SocialMediaSection>
    )
}

export default SocialMedia;