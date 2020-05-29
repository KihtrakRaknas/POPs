import React from 'react';
import FactCard from '../Components/FactCard';
import TypeWriter from 'react-typewriter';
import Jello from 'react-reveal/Jello';
import RubberBand from 'react-reveal/RubberBand';

export default class ManagementAndRemediation extends React.Component {
    render(){
        return(
            <div style={{overflowX:"hidden",overflowY:"hidden"}}>
                <div className="container">
                    <Jello><h2 className="display-3 text-center">Management & Remediation</h2></Jello>
                    <p>The US, with international help, has taken many steps to manage and reduce toxic emissions containing POPs as well as reduce any current instances of the toxic substances.</p>
                    <FactCard text="Canada and the United States signed an agreement for the Virtual Elimination of Persistent Toxic Substances in the Great Lakes, which sets long-term goals to reduce toxic emissions." src=""/><br/>
                    <FactCard text="The United States, Canada, and Mexico established the Commission for Environmental Cooperation (CEC) under the North American Agreement on Environmental Cooperation (NAAEC), which developed Regional Action Plans to identify activities that reduce or eliminate risks from chemicals of concern." src=""/><br/>
                    <FactCard text="The United States signed the legally binding regional protocol with other member nations of the United Nations Economic Commission for Europe (UNECE) on POPs, which seeks to eliminate production and reduce emissions of POPs in the UNECE region. The United States has not yet ratified the Protocol." src=""/><br/>
                    <FactCard text="The United States, along with 71 other countries and the European Community, have signed the Rotterdam Convention on the Prior Informed Consent (PIC) Procedure for Certain Hazardous Chemicals and Pesticides in International Trade, which identifies pesticides and industrial chemicals of concern, facilitates information sharing about their risks, and provides countries with an opportunity to make informed decisions about whether they should be imported. Some of the POP substances are already on the PIC list." src=""/><br/>
                    <FactCard text="The United States has also provided technical and financial assistance for POPs-related activities to a variety of countries and regions, including Mexico, Central and South America, Russia, Asia, and Africa. Examples of this assistance include development of dioxin and furan release inventories in Russia and Asia, the Chemicals Information Exchange and Networking Project for chemicals managers in targeted countries in Africa and Central America, the destruction of pesticide stockpiles in Africa and Russia, and the reduction of PCB sources in Russia, which reduced emissions of PCBs and enabled Russia to meet the requirements of both the Stockholm Convention and the LRTAP POPs Protocol." src=""/><br/>
                    <FactCard text="The United States is also an observer to the Basel Convention, which was designed to reduce cross-border movements of hazardous waste. The Convention tracks and monitors the waste and ensures that it is disposed of properly." src=""/><br/>
                </div>
            </div>
        )
    }
}