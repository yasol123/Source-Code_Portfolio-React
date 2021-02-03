import React from 'react';
import {ResumeData} from '../components/ResumeData';
import {Course} from '../components/ResumeData';
import {Work} from '../components/ResumeData';
import { Link } from 'react-router-dom';
const Resume =()=>{
    return (
        <div className="wrapper">
        <div className="resume_container">
            <div className="row">
                <div>
                    <h1 className="resume_heading">
                        Education
                    </h1>
                    <div className="resume_body">
                        <h3 className="resume_title">
                        Baruch College, the City University of New York
                        </h3>
                        <p className="resume_name">
                        Computer Information Systems
                        </p>
                        <p className="resume_detail">
                            Class of 2021 (Completed on December 2020)
                        </p>
                    </div>
            </div>
            <br/>
            <div className="row">
                    <h5 className="resume_heading">
                        Related Course Work
                    </h5>
                    <div className="skill_container">
                    {Course.map((item, index) => {
                        return (
                            <div className="skill_detail">
                                <h4 className="course_name">{item.name}</h4>
                            </div>
                    );
                 })}
                </div>
            </div>
                <div className="Work_Exp">
                    <h1 className="resume_heading">
                        Work Experience
                    </h1>
                    <div className="resume_body">
                    <h3 className="resume_title">
                    JC Food System, INC
                    <p className="resume_name">
                    {Work.title}
                    </p>
                    <p className="resume_detail">
                    (July 2018 - Present)
                    </p>
                    </h3>
                    <div>
                    {Work.map((item, index) => {
                        return (
                        <div className="resume_description">
                        <li>{item.description}</li>
                        </div>
                    );
                })}
                </div>
                </div>
                </div>
            </div>
            <div className="row">
                    <h5 className="resume_heading">
                        Projects/Portfolio
                    </h5>
                    <br/>
                    <div id="cta"><Link to="/Projects">Projects</Link></div>
            </div>
            <div className="row">
                    <h5 className="resume_heading">
                        Languages & Skills
                    </h5>
                    <div className="skill_container">
                    {ResumeData.map((item, index) => {
                        return (
                            <div className="skill_detail">
                                <img src= {item.image} className="skill_img" />
                                <h3>{item.skillname}</h3>
                            </div>
                    );
                 })}
                </div>
            </div>
        </div>
        </div>
    )
}
export default Resume;