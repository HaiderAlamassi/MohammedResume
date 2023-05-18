import styled from "styled-components";

/*
    ===============================
       Profile + Skills Styles
    ===============================
*/

export const ProfileAndSkills = styled.div`
    padding: 50px 0;
    overflow: hidden;
`
/*
.profile_skills {
    padding: 50px 0;
    overflow: hidden;
}
*/
export const ProfileSection = styled.div`
    width: 50%;
    float: left;
`
/*
.profile_skills .profile {
    width: 50%;
    float: left;
}
*/
export const ProfileList = styled.ul`
    list-style: none
`
/*
.profile_skills .profile .profile-list {
    list-style: none
}
*/
export const ListItem = styled.li`
    margin-bottom: 8px
`
/*
.profile_skills .profile .profile-list .profile-item {
    margin-bottom: 8px
}
*/
export const ProfileSpan = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: ${props => props.order === 6 ? "normal" : "bold"};
    color: ${props => props.order === 6 ? "#eb5424" : "#000"}
`
/*
.profile_skills .profile .profile-list .profile-item span{
    display: inline-block;
    width: 100px;
    font-weight: bold
}

.profile_skills .profile .profile-list .profile-item span.web {
    font-weight: normal;
    color: #eb5424
}
*/
export const Skills = styled.div`
    width: 50%;
    float: left;
`
/*
.profile_skills .skills {
    width: 50%;
    float: left;
}
*/
export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`
/*
.profile_skills .skills .skills-desc {
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
}
*/
export const Bar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`
/*
.profile_skills .skills .bar {
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
}
*/
export const BarTitle = styled.span`
    float: left;
`
/*
.profile_skills .skills .bar .title {
    float: left;
}
*/
export const BarPerc = styled.span`
    float: right;
    margin-right: 100px
`
/*
.profile_skills .skills .bar .perc {
    float: right;
    margin-right: 100px
}
*/
export const Percent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`
/*
.profile_skills .skills .bar .parent {
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
}
*/
export const PercentSpan = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;

    width: ${props => 
        props.order === "sp1" ? '100%' 
        : props.order === "sp2" ? '90%' 
        : props.order === "sp3" ? '80%' 
        : '0%'
    }
`
/*
.profile_skills .skills .bar .parent span {
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0
}
*/
/*---test---*/
/*
.profile_skills .skills .bar .parent span.sp1 {
    width: 100%;
}

.profile_skills .skills .bar .parent span.sp2 {
    width: 90%;
}

.profile_skills .skills .bar .parent span.sp3 {
    width: 80%;
}
*/
/*---test ends---*/
export const ProfileAndSkillsTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`
/*
.profile_skills .profile .profile-title,
.profile_skills .skills .skills-title{
    font-size: 40px; 
    margin-bottom: 20px
}
*/
export const ProfileAndSkillsSpan = styled.span`
    font-weight: normal;
`
/*
.profile_skills .profile .profile-title span,
.profile_skills .skills .skills-title span{
    font-weight: normal;
}
*/