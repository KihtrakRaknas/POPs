import React from 'react';
import FactCard from '../Components/FactCard';
import TypeWriter from 'react-typewriter';
import Jello from 'react-reveal/Jello';
import RubberBand from 'react-reveal/RubberBand';
export default class HomeScreen extends React.Component {
    render(){
        return(
            <div style={{overflowX:"hidden",overflowY:"hidden"}}>
                <div style={{height:"100vh", width:"100vw", backgroundImage:"url('https://a360-rtmagazine.s3.amazonaws.com/wp-content/uploads/2019/05/air-pollution-smog-1500-1280x640.jpg')",  backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
                    <div className="superCenter" style={{width:"75vw"}}>
                        <p style={{textAlign:"center",fontSize:"5vw",color:"white",fontWeight:'bold'}}>
                            <RubberBand><h1 style={{fontSize:"20vw"}}>POPs</h1></RubberBand>
                            <TypeWriter typing={1} class="display-1" >Persistent Organic Pollutants</TypeWriter>
                        </p>
                    </div>
                </div>
                <br/>
                <div className="container">
                    <Jello><h2 className="display-3 text-center">What are POPs?</h2></Jello>
                    <p>POPs are substances that are resistant to environmental degradation and cause adverse health effects.</p>
                    <br/>
                    <Jello><h2 className="display-2 text-center">Not-so-Fun Facts</h2></Jello>
                    <p>We encourage you to read the whole website. Use the links in the naviagtion bar at the top of the site to get detailed information. If you don't have time, we have compiled of the list of what we think are the most interesting and most imporant things you need to know.</p>
                    <br/>
                    
                    <FactCard text={`POPs are often called "forever chemicals" because they are resistant to chemical, biological, and photolytic degradation.`} link="POPsTechnicalDefinition"/>
                    <FactCard text="POPs are toxic to both humans and wildlife." link="POPsTechnicalDefinition"/>
                    <FactCard text={`POPs accumulate in the fatty tissue of living organisms including humans, and are found at higher concentrations at higher levels in the food chain`} link="POPsTechnicalDefinition"/>
                    <FactCard text={<div>
                        <p>Symptoms for infected people and animals can include:</p>
                        <ul>
                            <li>Cancer</li>
                            <li>Allergies</li>
                            <li>Hypersensitivity</li>
                            <li>Damage to the nervous system</li>
                            <li>Damage to the reproductive symptom </li>
                            <li>Damage to the immune system</li>
                            <li>Some POPs are also considered to be endocrine disruptors
                                <ul>
                                    <li>By altering the hormonal system, it can damage the reproductive and immune systems of exposed individuals as well as their offspring; they can also have developmental and carcinogenic effects.</li>
                                </ul>
                            </li>
                        </ul>
                        </div>} link="Health"/>
                </div>
            </div>
        )
    }
}