import React from 'react';
import FactCard from '../Components/FactCard';
import TypeWriter from 'react-typewriter';
import Jello from 'react-reveal/Jello';
import RubberBand from 'react-reveal/RubberBand';

export default class Health extends React.Component {
    render(){
        return(
            <div style={{overflowX:"hidden",overflowY:"hidden"}}>
                <div className="container">
                    <Jello><h2 className="display-3 text-center">Health Concerns</h2></Jello>
                    <p>People and animals are mainly exposed to POPs through contaminated foods. Less common exposure routes include drinking contaminated water and direct contact with the chemicals. Additionally, in mammals, POPs can be transferred through the placenta and breast milk to developing offspring.</p>
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
                        </div>}/>
                    <br/><br/>
                    <Jello><h3 className="display-4 text-center">Child Health</h3></Jello>
                    <FactCard text="Fetuses, infants and children may be at especially high risk."/>
                    <p>These early stages of life are when organs develop the most quickly, which means they are at their most vulnerable. Effects of POPs during childhood may not manifest until later in their lives, at which point they could suffer from reproductive, developmental, behavioral, neurologic, endocrine, and/or immunologic adverse health effects.</p>

                </div>
            </div>
        )
    }
}