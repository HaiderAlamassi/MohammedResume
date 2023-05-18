import React, { useState , useEffect } from 'react';

import axios from 'axios';
import { WorkSection , WorkTitle , Span , WorkPart , Icon , PartTitle , Line , PartDesc } from './style.js'

const Work = () => {

    const [ works , setWorks ] = useState([])

    useEffect(() => {
        const loadData = () => axios.get('js/data.json')
            .then(res => setWorks(res.data.works))
        loadData()
        } , [])

    const workList = works.map( workItem => {
        return (
            <WorkPart order={workItem.id} key={workItem.id}>
                <Icon className={workItem.icon_name}></Icon>
                <PartTitle>{workItem.title}</PartTitle>
                <Line />
                <PartDesc>{workItem.body}</PartDesc>
            </WorkPart>
        )
    })

    return(
        <WorkSection>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {workList}
            </div>
        </WorkSection>
    )
}

export default Work