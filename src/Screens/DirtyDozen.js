import React from 'react';
import FactCard from '../Components/FactCard';
import TypeWriter from 'react-typewriter';
import Jello from 'react-reveal/Jello';
import RubberBand from 'react-reveal/RubberBand';
import ReactTooltip from "react-tooltip";

const tokenize = (formula) => formula
  .split(/(\d+)/)
  .map((token, idx) => 
    idx % 2
      ? <sub key={idx}>{token}</sub>
      : token
    )

const Formula = ({children}) => (
  <code>{tokenize(children)}</code>
)

export default class DirtyDozen extends React.Component {
    render(){
        return(
            <div style={{overflowX:"hidden",overflowY:"hidden"}}>
                <div className="container">
                    <Jello><h2 className="display-3 text-center">The Dirty Dozen</h2></Jello>
                    <p>These are the dirty dozen. They are the 12 initial POPs listed in the Stockholm Convention in 2001. They have been recognized as causing adverse effects on humans and the ecosystem during this convention. They are Aldrin, Chlordane, DDT, Dieldrin, Endrin, Heptachlor, Hexachlorobenzene (HCB), Mirex, Toxaphene, Polychlorinated biphenyls (PCB),  Polychlorinated dibenzo-p-dioxins (PCDD), Polychlorinated dibenzofurans (PCDF).</p>
                    <br/>
                    <FactCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Aldrin.svg/1200px-Aldrin.svg.png" text={<span>Aldrin - <Formula>C12H8Cl6</Formula></span>} chemFormula/>
                    <ul>
                        <li>
                            Cause/Emission of POP: Pesticide                        
                        </li>
                        <li data-tip="Intentionally produced POPs are pesticides and industrial chemicals that may be traded between countries.">
                            Intentionally produced (<a href="#terms">?</a>)
                        </li>
                        <li>
                            It is a pesticide that is used to kill insects, but was found to also kill birds, fish and humans. When treated to crops, like rice, any animals that ate the rice or ate the animal that had eaten the rice dies. For humans, the fatal dose is just 5 grams.
                        </li>
                    </ul>
                    <br/>

                    <FactCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Cis-chlordane.svg/1280px-Cis-chlordane.svg.png" text={<span>Chlordane - <Formula>C10H6Cl8</Formula></span>} chemFormula/>
                    <ul>
                        <li>
                            Cause/Emission of POP: Pesticide                        
                        </li>
                        <li data-tip="Intentionally produced POPs are pesticides and industrial chemicals that may be traded between countries.">
                            Intentionally produced (<a href="#terms">?</a>)
                        </li>
                        <li>
                            It is a widely used pesticide for numerous crops. It remains in the soil for .5 - 1 year. Thus, it can spread through many crops. It can also spread through the air. It can affect the human immune system and is a possible human carcinogen.
                        </li>
                    </ul>
                    <br/>

                    <FactCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/P%2Cp%27-dichlorodiphenyltrichloroethane.svg/1920px-P%2Cp%27-dichlorodiphenyltrichloroethane.svg.png" text={<span>DDT - <Formula>C14H9Cl5</Formula></span>} chemFormula/>
                    <ul>
                        <li>
                            Cause/Emission of POP: Pesticide                        
                        </li>
                        <li data-tip="Intentionally produced POPs are pesticides and industrial chemicals that may be traded between countries.">
                            Intentionally produced (<a href="#terms">?</a>)
                        </li>
                        <li>
                            It is a pesticide that was mainly used in WWII and crops. It helped control diseases spread by insects. It is very stable and persistent, staying in soil for 10-15 years, along with its widespread use can make it found in a lot of places. It has serious long-term chronic health effects and with its spread in vast amounts of food, food-borne DDT is the greatest source of exposure.
                        </li>
                    </ul>
                    <br/>

                    <FactCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Dieldrin.svg/1280px-Dieldrin.svg.png" text={<span>Dieldrin - <Formula>C12H8Cl6O</Formula></span>} chemFormula/>
                    <ul>
                        <li>
                            Cause/Emission of POP: Pesticide                        
                        </li>
                        <li data-tip="Intentionally produced POPs are pesticides and industrial chemicals that may be traded between countries.">
                            Intentionally produced (<a href="#terms">?</a>)
                        </li>
                        <li>
                            Pesticide for termites and textile pests, insect-borne diseases and for crops. Its half-life in soil is around five years. Aldrin rapidly composes into Dieldrin, so stopping direct use of Dieldrin won’t stop its spread. Dieldrin residues have been found in air, water, soil, fish, birds, and mammals, including humans. It is highly toxic to aquatic animals with only low doses. Primarily spread through food.
                        </li>
                    </ul>
                    <br/>

                    <FactCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/%28%2B%29-Heptachlor.svg/1024px-%28%2B%29-Heptachlor.svg.png" text={<span>Heptachlor - <Formula>C10H5Cl7</Formula></span>} chemFormula/>
                    <ul>
                        <li>
                            Cause/Emission of POP: Pesticide                        
                        </li>
                        <li data-tip="Intentionally produced POPs are pesticides and industrial chemicals that may be traded between countries.">
                            Intentionally produced (<a href="#terms">?</a>)
                        </li>
                        <li>
                            It is a pesticide that is widely used in soil. It is found to be fatal at high doses to several rodents and small animals. It is a possible human carcinogen. It is mainly exposed through food for humans.
                        </li>
                    </ul>
                    <br/>

                    <FactCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Hexachlorobenzene.svg/1024px-Hexachlorobenzene.svg.png" text={<span>Hexachlorobenzene (HCB) - <Formula>C6Cl6</Formula></span>} chemFormula/>
                    <ul>
                        <li>
                            Cause/Emission of POP: Industrial Chemicals and By-product of                        
                        </li>
                        <li>
                            Intentionally and Unintentionally produced
                        </li>
                        <li>
                        It is a pesticide for crops. It is also a byproduct of certain industrial chemicals and an impurity in several pesticide formulations. Eating food with HCB can lead to a variety of symptoms, including photosensitive skin lesions, colic, debilitation, and it can cause metabolic disorders. It is lethal to some animals at high doses and leads to decline in reproductive success at low doses.
                                                </li>
                    </ul>
                    <br/>

                    <FactCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Mirex.svg/1280px-Mirex.svg.png" text={<span>Mirex - <Formula>C10Cl12</Formula></span>} chemFormula/>
                    <ul>
                        <li>
                            Cause/Emission of POP: Pesticide                        
                        </li>
                        <li data-tip="Intentionally produced POPs are pesticides and industrial chemicals that may be traded between countries.">
                            Intentionally produced (<a href="#terms">?</a>)
                        </li>
                        <li>
                        It is an insecticide and is also used in fire retardant materials. It is not harmful in direct exposure but is considered a possible human carcinogen. It is one of the most stable and persistent pesticides, with a half life of up to 10 years. It is toxic to several plant species and to fish and crustaceans. Human exposure is primarily found through meat and fish.
                                                </li>
                    </ul>
                    <br/>

                    <FactCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Toxaphen.svg/1920px-Toxaphen.svg.png" text={<span>Toxaphene - <Formula>C10H8Cl8</Formula></span>} chemFormula/>
                    <ul>
                        <li>
                            Cause/Emission of POP: Pesticide                        
                        </li>
                        <li data-tip="Intentionally produced POPs are pesticides and industrial chemicals that may be traded between countries.">
                            Intentionally produced (<a href="#terms">?</a>)
                        </li>
                        <li>
                            It is an insecticide for crops and to control ticks and mites in livestock. It has a half-life of 12 years and was the most widely used presiticed in 1975 in the US. It is a possible human carcinogen and it is spread through food. It is highly toxic to fish.
                        </li>
                    </ul>
                    <br/>

                    <FactCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Polychlorinated_biphenyl_structure.svg/1920px-Polychlorinated_biphenyl_structure.svg.png" text={<span>Polychlorinated biphenyls (PCB) - <code>C<sub>12</sub>H<sub>10−x</sub>Cl<sub>x</sub></code></span>} chemFormula/>
                    <ul>
                        <li>
                            Cause/Emission of POP: Industrial Chemicals and By-product of reactions                    
                        </li>
                        <li>
                            Intentionally and Unintentionally produced
                        </li>
                        <li>
                            It is used in industrial chemicals and by-products mainly in industry. There are 209 types of PCBs, 13 of which have dioxin-like toxicity. The half-lives can range from 10 days to 1.5 years. They are lethal at high doses to fish and lead to reproductive failure and immunosuppression in various wild animals. It can cause various symptoms in humans, including pigmentation of nails and mucous membranes, swelling of the eyelids, fatigue, nausea, vomiting, and developmental and behavioral problems in children.
                        </li>
                    </ul>
                    <br/>

                    <FactCard img="https://upload.wikimedia.org/wikipedia/commons/d/d8/PCDD_general_structure.png" text={<span>Polychlorinated dibenzo-p-dioxins (PCDD)</span>} chemFormula/>
                    <ul>
                        <li>
                            One such example is Heptachlorodibenzo-p-dioxin
                            <ul>
                                <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Heptachlorodibenzodioxin.svg/1920px-Heptachlorodibenzodioxin.svg.png" style={{width:"30%"}}/></li>
                                <li><Formula>C12HCl7O2</Formula></li>
                            </ul>
                        </li>
                        <li>
                            Cause/Emission of POP: By-product of reactions                
                        </li>
                        <li data-tip="Unintentional produced POPs are by-products of industrial or other processes involving combustions which are not products in commerce.">
                            Unintentionally produced (<a href="#terms">?</a>)
                        </li>
                        <li>
                        It is a by-product unintentionally produced due to incomplete combustion, manufacturing pesticides and other substances. They are edited mainly from burning hospitals, municipal and hazardous waste and from specific natural fuels. There are 75 types of PCDD. Seven are of main cons=cern, with one of them having a half-life of 10-12 years. They have several harmful effects in humans, such as immune and enzyme disorders and possibly being a human carcinogen. It is lethal to fish and lead to symptoms, like birth defects and death, in certain animals. Food is the major exposure of this chemical.
                                                </li>
                    </ul>
                    <br/>

                    <FactCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/PCDF_general_structure.svg/1920px-PCDF_general_structure.svg.png" text={<span>Polychlorinated dibenzofurans (PCDF)</span>} chemFormula/>
                    <ul>
                        <li>
                            Cause/Emission of POP: By-product of reactions                       
                        </li>
                        <li data-tip="Unintentional produced POPs are by-products of industrial or other processes involving combustions which are not products in commerce.">
                            Unintentionally produced (<a href="#terms">?</a>)
                        </li>
                        <li>
                        It is a by-product unintentionally produced like PCDD and during production of PCBs. There are 135 types, with varying toxicities, sharing similar effects like PCDD due to their similar structures. It is persistent for long periods in the environment, and it is possibly a human carcinogen. Food is the major exposure of this chemical.
                                                </li>
                    </ul>
                    <br/><br/><br/>
                    <h3 id="terms">Terms defined:</h3>
                    <ul>
                        <li>
                            Intentionally produced POPs are pesticides and industrial chemicals that may be traded between countries.                     
                        </li>
                        <li>
                            Unintentional produced POPs are by-products of industrial or other processes involving combustions which are not products in commerce.
                        </li>
                    </ul>
                    
                    <br/>
                </div>
                <ReactTooltip />
            </div>
        )
    }
}