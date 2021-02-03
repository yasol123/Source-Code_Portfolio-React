import React from 'react';
import { SliderData } from '../components/SliderData';
import ImageSlider from '../components/ImageSlider';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <section className="home">
            <div className="wrapper">
        <h1 className="greeting">Hello World!<br/><stong id="yasol">Yasol Jeong's</stong> Portfolio Website</h1>
        <div id="cta"><Link to="/Resume">Resume</Link></div>
        <div id="cta"><Link to="/Projects">Projects</Link></div>
        <div id="cta"><Link to="/Contact">Contact Now!</Link></div>
        
        <ImageSlider slides={SliderData}/>
        </div>
        </section>
    )
}

export default Home;
