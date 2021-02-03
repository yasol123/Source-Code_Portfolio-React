import React from 'react';
import {ProjectData} from '../components/ProjectData';
import '../App.css';
import { Link } from 'react-router-dom';

class Projects extends React.Component{
    render(){
        return (
            <section className="mywork">
                <div className="wrapper">
            {ProjectData.map((item, index) => {
                return (
                    <div>
                    <Link to={item.path} key={index} className="portfolio">
                        <img src= {item.image} className="portfolio_img" />
                        <h3 className="portfolio_title">{item.title}</h3></Link>
                        <ul className="portfolio_item_ind">{item.description}</ul>
                        </div>
                );
            })}
            </div>
        </section>);
    }
}
export default Projects;
