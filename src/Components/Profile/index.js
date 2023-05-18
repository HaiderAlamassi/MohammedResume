import { React , useState , useEffect } from 'react'
import axios from 'axios'
import { ProfileAndSkills , ProfileSection , ProfileList , ListItem , ProfileSpan , Skills , SkillsDesc , Bar , BarTitle , BarPerc , Percent , PercentSpan , ProfileAndSkillsTitle , ProfileAndSkillsSpan } from'./style.js'

const Profile = () => {

    const [ profile , setProfile ] = useState([]);
    const [ skills , setSkills ] = useState([]);

    useEffect( () => {
        const loadData = () => axios.get('js/data.json')
            .then(res => setProfile(res.data.profile))
        loadData()
    } , [])

    useEffect( () => {
        const loadData = () => axios.get('js/data.json')
            .then(res => setSkills(res.data.skills))
        loadData()
    } , [])
    //console.log(profile);
    //console.log(skills);
    
    const RenderProfile = profile.map(profileItem => {
        return(
            <ListItem key={profileItem.id}>
                <ProfileSpan>{profileItem.info}</ProfileSpan>
                <ProfileSpan order={profileItem.id}>{profileItem.value}</ProfileSpan>
            </ListItem>
        )
    })

    const RenderSkills = skills.map(skillItem => {
        return(
            <Bar key={skillItem.id}>
                <BarTitle>{skillItem.title}</BarTitle>
                <BarPerc>{skillItem.perc}</BarPerc>
                <Percent>
                    <PercentSpan order={skillItem.spanOrder}></PercentSpan>
                </Percent>
            </Bar>
        )
    })
    
    return(
        <ProfileAndSkills>
            <div className="container">
                <ProfileSection>
                    <ProfileAndSkillsTitle><ProfileSpan>My </ProfileSpan>Profile</ProfileAndSkillsTitle>
                    <ProfileList>
                         {RenderProfile}
                    </ProfileList>
                </ProfileSection>

                <Skills>
                    <ProfileAndSkillsTitle>The <ProfileAndSkillsSpan>Languages</ProfileAndSkillsSpan></ProfileAndSkillsTitle>

                    {RenderSkills}
                    
                </Skills>
                
            </div>
        </ProfileAndSkills>             
    )
}

export default Profile;