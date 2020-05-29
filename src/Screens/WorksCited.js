import React from 'react';
import Citation from '../Components/Citation';
import Jello from 'react-reveal/Jello';
export default class WordsCited extends React.Component {
    render(){
        let cites = [
            `Convention, Stockholm. “What Are POPs?” Stockholm Convention Website, chm.pops.int/TheConvention/ThePOPs/tabid/673/Default.aspx.`,
            `Convention, Stockholm. “The 12 Initial POPs under the Stockholm Convention.” Stockholm Convention Website, chm.pops.int/TheConvention/ThePOPs/The12InitialPOPs/tabid/296/Default.aspx.`,
            `“Persistent Organic Pollutants: A Global Issue, A Global Response.” EPA, Environmental Protection Agency, 2 Jan. 2020, www.epa.gov/international-cooperation/persistent-organic-pollutants-global-issue-global-response.`,
            `“Persistent Organic Pollutants: Impact on Child Health.” World Health Organization, World Health Organization, www.who.int/publications-detail/persistent-organic-pollutants-impact-on-child-health.`,
            `“Stockholm Convention on Persistent Organic Pollutants - Ppt Video Online Download.” SlidePlayer, slideplayer.com/slide/6922828/.`,
            `Donyinah, Stephen Kudom. Persistent Organic Pollutants. IntechOpen, 2019.`,
            `Jones, K. C., and P. De Voogt. Persistent Organic Pollutants (POPs): State of the Science. Elsevier, 1999.`,
            `POPS: Regulatory Actions and Guidelines Concerning Persistent Organic Pollutants. United Nations Environment Programme, UNEP Chemicals, 1998.`,
            `Bernes, C. Persistent organic pollutants. Sweden: N. p., 1998. Web.`,
            `Ritter, Lee et al. “PERSISTENT ORGANIC POLLUTANTS An Assessment Report on : DDT-Aldrin-Dieldrin-Endrin-Chlordane Heptachlor-Hexachlorobenzene Mirex-Toxaphene Polychlorinated Biphenyls Dioxins and Furans Prepared.” (2001).`
        ]
        cites=cites.sort((item,item2)=>item.replace(/\W/g, '').localeCompare(item2.replace(/\W/g, '')))
        cites.filter(item=>!!item)
        return(
            <div style={{overflowX:"hidden",overflowY:"hidden"}}>
                <div className="container">
                    <Jello><h2 className="display-3 text-center">Works Cited</h2></Jello>
                    <br/>
                    {cites.map(item=><Citation citation={item}/>)}
                    <br/><br/><br/>
                </div>
            </div>
        )
    }
}