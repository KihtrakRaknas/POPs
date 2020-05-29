import React from 'react';
import FactCard from '../Components/FactCard';
import TypeWriter from 'react-typewriter';
import Jello from 'react-reveal/Jello';
import RubberBand from 'react-reveal/RubberBand';

export default class POPsTechnicalDefinition extends React.Component {
    render(){
        return(
            <div style={{overflowX:"hidden",overflowY:"hidden"}}>
                <div className="container">
                    <Jello><h2 className="display-3 text-center">POPs Technical Definition</h2></Jello>
                    <p>Persistent Organic Pollutants are organic chemical substances that persist in the environment for many years.</p>
                    <FactCard text="Organic chemical substances are carbon-based."/>
                    <br/>
                    <FactCard text="POPs remain intact for exceptionally long periods of time, some reaching decades." src="http://chm.pops.int/TheConvention/ThePOPs/tabid/673/Default.aspx"/>
                    <br/>
                    <FactCard text={`POPs are often called "forever chemicals" because they are resistant to chemical, biological, and photolytic degradation.`} src="https://web.archive.org/web/20070926101350/http://www.chem.unep.ch/pops/ritter/en/ritteren.pdf"/>
                    <br/>
                    <FactCard text="POPs become widely distributed throughout the environment as a result of natural processes involving soil, water and, most notably, air" src="http://chm.pops.int/TheConvention/ThePOPs/tabid/673/Default.aspx"/>
                    <br/>
                    <FactCard text="POPs accumulate in the fatty tissue of living organisms including humans, and are found at higher concentrations at higher levels in the food chain" src="http://chm.pops.int/TheConvention/ThePOPs/tabid/673/Default.aspx"/>
                    <br/>
                    <FactCard text="POPs are toxic to both humans and wildlife." src="http://chm.pops.int/TheConvention/ThePOPs/tabid/673/Default.aspx"/>
                    <br/>
                    <FactCard text="Persistence, bioaccumulation, potential for long-range environmental transport (LRET), and toxicity lead to significant adverse human health and/or environmental effects." src="http://chm.pops.int/Portals/0/docs/publications/sc_factsheet_001.pdf"/>
                    <br/>
                </div>
            </div>
        )
    }
}