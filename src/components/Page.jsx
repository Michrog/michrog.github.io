import React, {useState} from "react";
import SectionChoice from './SectionChoice'
import PageSection from './PageSection'
import '../styles/Page.css'

export default function Page(){
    const [section, setSection] = useState('serious')
    return (
        <div className="Page">
            <SectionChoice section={section} onChangeSection={setSection}></SectionChoice>
            <hr />
            <PageSection section={section}></PageSection>
        </div>
    )
}