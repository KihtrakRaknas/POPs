(this.webpackJsonppops=this.webpackJsonppops||[]).push([[0],{112:function(e,t,a){e.exports=a(195)},117:function(e,t,a){},118:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(70),r=a.n(l),o=(a(117),a(118),a(7)),s=a(8),c=a(10),m=a(9),d=a(11),u=(a(119),a(108)),h=a.n(u),p=a(109),f=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("p",{style:Object(p.a)({marginLeft:40,textIndent:-40,marginBottom:0,fontFamily:'"Times New Roman", Times, serif',fontSize:"12pt"},"marginBottom","1rem")},this.props.citation)}}]),t}(i.a.Component),E=a(21),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={yPos:10*Math.random()-5,showSource:!1},a.firstColor="#"+Math.random().toString(16).substr(2,6)+"30",a.secondColor="#"+Math.random().toString(16).substr(2,6)+"30",a.left=Math.random()>.5,a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.upBob=Math.random()>.5;var t=window.chrome,a=window.navigator,n=a.vendor,i="undefined"!==typeof window.opr,l=a.userAgent.indexOf("Edge")>-1;a.userAgent.match("CriOS")||null!==t&&"undefined"!==typeof t&&"Google Inc."===n&&!1===i&&!1===l?setInterval((function(){e.state.yPos>5?e.upBob=!1:e.state.yPos<-5&&(e.upBob=!0);var t=.1*(1-Math.pow(Math.abs(e.state.yPos)/5,2))+2e-5;e.setState({yPos:e.upBob?e.state.yPos+t:e.state.yPos-t})}),10):this.setState({yPos:0})}},{key:"render",value:function(){var e=this,t=i.a.createElement("div",null,i.a.createElement("div",{style:{backgroundImage:"linear-gradient(to bottom right, "+this.firstColor+", "+this.secondColor+")",borderRadius:5,borderColor:"grey",borderStyle:"solid",borderWidth:2,padding:5,marginTop:10,marginBottom:10,width:"100%",boxShadow:(5-this.state.yPos)/2+"px "+(5-this.state.yPos)+"px lightgrey",transition:"transform 100ms linear",transform:"translateY("+this.state.yPos+"px) translateX("+this.state.yPos/2+"px)"},ref:this.absPosDiv},this.props.img&&i.a.createElement("img",{src:this.props.img,className:"factCardImg rounded mx-auto d-block"}),this.props.chemFormula?i.a.createElement("p",{className:"text-center",style:{margin:0,fontSize:"40px",textIndent:0,fontWeight:"bold"}},this.props.text):i.a.createElement("p",{style:{margin:0,fontSize:"x-large",textIndent:0}},this.props.text),!this.state.showSource&&(this.props.src||this.props.link)&&i.a.createElement("p",{style:{textAlign:"right",padding:0,margin:0,animation:"fadeIn ease 10s"}},i.a.createElement("small",{onClick:function(){return e.setState({showSource:!0})}},this.props.src?"View Source":"Show Corresponding Page")),this.state.showSource&&i.a.createElement("p",{style:{textAlign:"right",padding:0,margin:0}},i.a.createElement("small",{style:{animation:"fadeIn ease 2s"}},this.props.src?i.a.createElement("a",{href:this.props.src},this.props.src):i.a.createElement(E.b,{to:this.props.link},this.props.link)))));return"ReactSnap"===navigator.userAgent?t:i.a.createElement(h.a,{left:this.left,right:!this.left,className:"factCard"},t)}}]),t}(i.a.Component),b=a(32),v=a.n(b),y=a(14),P=a.n(y),w=a(33),C=a.n(w),O=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{overflowX:"hidden",overflowY:"hidden"}},i.a.createElement("div",{style:{height:"100vh",width:"100vw",backgroundImage:"url('https://a360-rtmagazine.s3.amazonaws.com/wp-content/uploads/2019/05/air-pollution-smog-1500-1280x640.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}},i.a.createElement("div",{className:"superCenter",style:{width:"75vw"}},i.a.createElement("p",{style:{textAlign:"center",fontSize:"5vw",color:"white",fontWeight:"bold"}},i.a.createElement(C.a,null,i.a.createElement("h1",{style:{fontSize:"20vw"}},"POPs")),i.a.createElement(v.a,{typing:1,class:"display-1"},"Persistent Organic Pollutants")))),i.a.createElement("br",null),i.a.createElement("div",{className:"container"},i.a.createElement(P.a,null,i.a.createElement("h2",{className:"display-3 text-center"},"What are POPs?")),i.a.createElement("p",null,"POPs are substances that are resistant to environmental degradation and cause adverse health effects."),i.a.createElement("br",null),i.a.createElement(P.a,null,i.a.createElement("h2",{className:"display-2 text-center"},"Not-so-Fun Facts")),i.a.createElement("p",null,"We encourage you to read the whole website. Use the links in the naviagtion bar at the top of the site to get detailed information. If you don't have time, we have compiled of the list of what we think are the most interesting and most imporant things you need to know."),i.a.createElement("br",null),i.a.createElement(g,{text:'POPs are often called "forever chemicals" because they are resistant to chemical, biological, and photolytic degradation.',link:"POPsTechnicalDefinition"}),i.a.createElement(g,{text:"POPs are toxic to both humans and wildlife.",link:"POPsTechnicalDefinition"}),i.a.createElement(g,{text:"POPs accumulate in the fatty tissue of living organisms including humans, and are found at higher concentrations at higher levels in the food chain",link:"POPsTechnicalDefinition"}),i.a.createElement(g,{text:i.a.createElement("p",null,"Symptoms for infected people and animals can include:",i.a.createElement("ul",null,i.a.createElement("li",null,"Cancer"),i.a.createElement("li",null,"Allergies"),i.a.createElement("li",null,"Hypersensitivity"),i.a.createElement("li",null,"Damage to the nervous system"),i.a.createElement("li",null,"Damage to the reproductive symptom "),i.a.createElement("li",null,"Damage to the immune system"),i.a.createElement("li",null,"Some POPs are also considered to be endocrine disruptors",i.a.createElement("ul",null,i.a.createElement("li",null,"By altering the hormonal system, it can damage the reproductive and immune systems of exposed individuals as well as their offspring; they can also have developmental and carcinogenic effects."))))),link:"Health"})))}}]),t}(i.a.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).scrolled=function(){"Home"==a.props.active&&a.setState({alpha:window.scrollY/window.innerHeight})},console.log("NEW"),a.state={alpha:"Home"==a.props.active?window.scrollY/window.innerHeight:1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log(e.active+" - "+this.props.active),this.setState({alpha:"Home"==e.active?window.scrollY/window.innerHeight:1})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrolled)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrolled)}},{key:"render",value:function(){return console.log(this.props.active),i.a.createElement("div",null,"Home"!=this.props.active&&i.a.createElement("div",null,i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null)),i.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-dark",style:{backgroundColor:"rgba(0,0,0,"+this.state.alpha+")"}},i.a.createElement("a",{className:"navbar-brand",href:"https://kihtrak.com/POPs"},"All About POPs"),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},i.a.createElement("div",{className:"navbar-nav ml-auto"},i.a.createElement(E.b,{className:"nav-item nav-link ".concat("Home"==this.props.active?"active":""),to:"/"},"Home"),i.a.createElement(E.b,{className:"nav-item nav-link ".concat("POPsTechnicalDefinition"==this.props.active?"active":""),to:"/POPsTechnicalDefinition"},"POPs Technical Definition"),i.a.createElement(E.b,{className:"nav-item nav-link ".concat("DirtyDozen"==this.props.active?"active":""),to:"/DirtyDozen"},"Dirty Dozen"),i.a.createElement(E.b,{className:"nav-item nav-link ".concat("Health"==this.props.active?"active":""),to:"/Health"},"Health"),i.a.createElement(E.b,{className:"nav-item nav-link ".concat("ManagementAndRemediation"==this.props.active?"active":""),to:"/ManagementAndRemediation"},"Management & Remediation"),i.a.createElement(E.b,{className:"nav-item nav-link ".concat("WorksCited"==this.props.active?"active":""),to:"/WorksCited"},"Works Cited")))))}}]),t}(i.a.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{overflowX:"hidden",overflowY:"hidden"}},i.a.createElement("div",{className:"container"},i.a.createElement(P.a,null,i.a.createElement("h2",{className:"display-3 text-center"},"Management & Remediation")),i.a.createElement("p",null,"The US, with international help, has taken many steps to manage and reduce toxic emissions containing POPs as well as reduce any current instances of the toxic substances."),i.a.createElement(g,{text:"Canada and the United States signed an agreement for the Virtual Elimination of Persistent Toxic Substances in the Great Lakes, which sets long-term goals to reduce toxic emissions.",src:""}),i.a.createElement("br",null),i.a.createElement(g,{text:"The United States, Canada, and Mexico established the Commission for Environmental Cooperation (CEC) under the North American Agreement on Environmental Cooperation (NAAEC), which developed Regional Action Plans to identify activities that reduce or eliminate risks from chemicals of concern.",src:""}),i.a.createElement("br",null),i.a.createElement(g,{text:"The United States signed the legally binding regional protocol with other member nations of the United Nations Economic Commission for Europe (UNECE) on POPs, which seeks to eliminate production and reduce emissions of POPs in the UNECE region. The United States has not yet ratified the Protocol.",src:""}),i.a.createElement("br",null),i.a.createElement(g,{text:"The United States, along with 71 other countries and the European Community, have signed the Rotterdam Convention on the Prior Informed Consent (PIC) Procedure for Certain Hazardous Chemicals and Pesticides in International Trade, which identifies pesticides and industrial chemicals of concern, facilitates information sharing about their risks, and provides countries with an opportunity to make informed decisions about whether they should be imported. Some of the POP substances are already on the PIC list.",src:""}),i.a.createElement("br",null),i.a.createElement(g,{text:"The United States has also provided technical and financial assistance for POPs-related activities to a variety of countries and regions, including Mexico, Central and South America, Russia, Asia, and Africa. Examples of this assistance include development of dioxin and furan release inventories in Russia and Asia, the Chemicals Information Exchange and Networking Project for chemicals managers in targeted countries in Africa and Central America, the destruction of pesticide stockpiles in Africa and Russia, and the reduction of PCB sources in Russia, which reduced emissions of PCBs and enabled Russia to meet the requirements of both the Stockholm Convention and the LRTAP POPs Protocol.",src:""}),i.a.createElement("br",null),i.a.createElement(g,{text:"The United States is also an observer to the Basel Convention, which was designed to reduce cross-border movements of hazardous waste. The Convention tracks and monitors the waste and ensures that it is disposed of properly.",src:""}),i.a.createElement("br",null)))}}]),t}(i.a.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=["Convention, Stockholm. \u201cWhat Are POPs?\u201d Stockholm Convention Website, chm.pops.int/TheConvention/ThePOPs/tabid/673/Default.aspx.","Convention, Stockholm. \u201cThe 12 Initial POPs under the Stockholm Convention.\u201d Stockholm Convention Website, chm.pops.int/TheConvention/ThePOPs/The12InitialPOPs/tabid/296/Default.aspx.","\u201cPersistent Organic Pollutants: A Global Issue, A Global Response.\u201d EPA, Environmental Protection Agency, 2 Jan. 2020, www.epa.gov/international-cooperation/persistent-organic-pollutants-global-issue-global-response.","\u201cPersistent Organic Pollutants: Impact on Child Health.\u201d World Health Organization, World Health Organization, www.who.int/publications-detail/persistent-organic-pollutants-impact-on-child-health.","\u201cStockholm Convention on Persistent Organic Pollutants - Ppt Video Online Download.\u201d SlidePlayer, slideplayer.com/slide/6922828/.","Donyinah, Stephen Kudom. Persistent Organic Pollutants. IntechOpen, 2019.","Jones, K. C., and P. De Voogt. Persistent Organic Pollutants (POPs): State of the Science. Elsevier, 1999.","POPS: Regulatory Actions and Guidelines Concerning Persistent Organic Pollutants. United Nations Environment Programme, UNEP Chemicals, 1998.","Bernes, C. Persistent organic pollutants. Sweden: N. p., 1998. Web.","Ritter, Lee et al. \u201cPERSISTENT ORGANIC POLLUTANTS An Assessment Report on : DDT-Aldrin-Dieldrin-Endrin-Chlordane Heptachlor-Hexachlorobenzene Mirex-Toxaphene Polychlorinated Biphenyls Dioxins and Furans Prepared.\u201d (2001)."];return(e=e.sort((function(e,t){return e.replace(/\W/g,"").localeCompare(t.replace(/\W/g,""))}))).filter((function(e){return!!e})),i.a.createElement("div",{style:{overflowX:"hidden",overflowY:"hidden"}},i.a.createElement("div",{className:"container"},i.a.createElement(P.a,null,i.a.createElement("h2",{className:"display-3 text-center"},"Works Cited")),i.a.createElement("br",null),e.map((function(e){return i.a.createElement(f,{citation:e})})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null)))}}]),t}(i.a.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{overflowX:"hidden",overflowY:"hidden"}},i.a.createElement("div",{className:"container"},i.a.createElement(P.a,null,i.a.createElement("h2",{className:"display-3 text-center"},"POPs Technical Definition")),i.a.createElement("p",null,"Persistent Organic Pollutants are organic chemical substances that persist in the environment for many years."),i.a.createElement(g,{text:"Organic chemical substances are carbon-based."}),i.a.createElement("br",null),i.a.createElement(g,{text:"POPs remain intact for exceptionally long periods of time, some reaching decades.",src:"http://chm.pops.int/TheConvention/ThePOPs/tabid/673/Default.aspx"}),i.a.createElement("br",null),i.a.createElement(g,{text:'POPs are often called "forever chemicals" because they are resistant to chemical, biological, and photolytic degradation.',src:"https://web.archive.org/web/20070926101350/http://www.chem.unep.ch/pops/ritter/en/ritteren.pdf"}),i.a.createElement("br",null),i.a.createElement(g,{text:"POPs become widely distributed throughout the environment as a result of natural processes involving soil, water and, most notably, air",src:"http://chm.pops.int/TheConvention/ThePOPs/tabid/673/Default.aspx"}),i.a.createElement("br",null),i.a.createElement(g,{text:"POPs accumulate in the fatty tissue of living organisms including humans, and are found at higher concentrations at higher levels in the food chain",src:"http://chm.pops.int/TheConvention/ThePOPs/tabid/673/Default.aspx"}),i.a.createElement("br",null),i.a.createElement(g,{text:"POPs are toxic to both humans and wildlife.",src:"http://chm.pops.int/TheConvention/ThePOPs/tabid/673/Default.aspx"}),i.a.createElement("br",null),i.a.createElement(g,{text:"Persistence, bioaccumulation, potential for long-range environmental transport (LRET), and toxicity lead to significant adverse human health and/or environmental effects.",src:"http://chm.pops.int/Portals/0/docs/publications/sc_factsheet_001.pdf"}),i.a.createElement("br",null)))}}]),t}(i.a.Component),D=a(111),S=function(e){var t=e.children;return i.a.createElement("code",null,t.split(/(\d+)/).map((function(e,t){return t%2?i.a.createElement("sub",{key:t},e):e})))},j=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{overflowX:"hidden",overflowY:"hidden"}},i.a.createElement("div",{className:"container"},i.a.createElement(P.a,null,i.a.createElement("h2",{className:"display-3 text-center"},"The Dirty Dozen")),i.a.createElement("p",null,"These are the dirty dozen. They are the 12 initial POPs listed in the Stockholm Convention in 2001. They have been recognized as causing adverse effects on humans and the ecosystem during this convention. They are Aldrin, Chlordane, DDT, Dieldrin, Endrin, Heptachlor, Hexachlorobenzene (HCB), Mirex, Toxaphene, Polychlorinated biphenyls (PCB),  Polychlorinated dibenzo-p-dioxins (PCDD), Polychlorinated dibenzofurans (PCDF)."),i.a.createElement("br",null),i.a.createElement(g,{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Aldrin.svg/1200px-Aldrin.svg.png",text:i.a.createElement("span",null,"Aldrin - ",i.a.createElement(S,null,"C12H8Cl6")),chemFormula:!0}),i.a.createElement("ul",null,i.a.createElement("li",null,"Cause/Emission of POP: Pesticide"),i.a.createElement("li",{"data-tip":"Intentionally produced POPs are pesticides and industrial chemicals that may be traded between countries."},"Intentionally produced (",i.a.createElement("a",{href:"#terms"},"?"),")"),i.a.createElement("li",null,"It is a pesticide that is used to kill insects, but was found to also kill birds, fish and humans. When treated to crops, like rice, any animals that ate the rice or ate the animal that had eaten the rice dies. For humans, the fatal dose is just 5 grams.")),i.a.createElement("br",null),i.a.createElement(g,{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Cis-chlordane.svg/1280px-Cis-chlordane.svg.png",text:i.a.createElement("span",null,"Chlordane - ",i.a.createElement(S,null,"C10H6Cl8")),chemFormula:!0}),i.a.createElement("ul",null,i.a.createElement("li",null,"Cause/Emission of POP: Pesticide"),i.a.createElement("li",{"data-tip":"Intentionally produced POPs are pesticides and industrial chemicals that may be traded between countries."},"Intentionally produced (",i.a.createElement("a",{href:"#terms"},"?"),")"),i.a.createElement("li",null,"It is a widely used pesticide for numerous crops. It remains in the soil for .5 - 1 year. Thus, it can spread through many crops. It can also spread through the air. It can affect the human immune system and is a possible human carcinogen.")),i.a.createElement("br",null),i.a.createElement(g,{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/P%2Cp%27-dichlorodiphenyltrichloroethane.svg/1920px-P%2Cp%27-dichlorodiphenyltrichloroethane.svg.png",text:i.a.createElement("span",null,"DDT - ",i.a.createElement(S,null,"C14H9Cl5")),chemFormula:!0}),i.a.createElement("ul",null,i.a.createElement("li",null,"Cause/Emission of POP: Pesticide"),i.a.createElement("li",{"data-tip":"Intentionally produced POPs are pesticides and industrial chemicals that may be traded between countries."},"Intentionally produced (",i.a.createElement("a",{href:"#terms"},"?"),")"),i.a.createElement("li",null,"It is a pesticide that was mainly used in WWII and crops. It helped control diseases spread by insects. It is very stable and persistent, staying in soil for 10-15 years, along with its widespread use can make it found in a lot of places. It has serious long-term chronic health effects and with its spread in vast amounts of food, food-borne DDT is the greatest source of exposure.")),i.a.createElement("br",null),i.a.createElement(g,{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Dieldrin.svg/1280px-Dieldrin.svg.png",text:i.a.createElement("span",null,"Dieldrin - ",i.a.createElement(S,null,"C12H8Cl6O")),chemFormula:!0}),i.a.createElement("ul",null,i.a.createElement("li",null,"Cause/Emission of POP: Pesticide"),i.a.createElement("li",{"data-tip":"Intentionally produced POPs are pesticides and industrial chemicals that may be traded between countries."},"Intentionally produced (",i.a.createElement("a",{href:"#terms"},"?"),")"),i.a.createElement("li",null,"Pesticide for termites and textile pests, insect-borne diseases and for crops. Its half-life in soil is around five years. Aldrin rapidly composes into Dieldrin, so stopping direct use of Dieldrin won\u2019t stop its spread. Dieldrin residues have been found in air, water, soil, fish, birds, and mammals, including humans. It is highly toxic to aquatic animals with only low doses. Primarily spread through food.")),i.a.createElement("br",null),i.a.createElement(g,{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/%28%2B%29-Heptachlor.svg/1024px-%28%2B%29-Heptachlor.svg.png",text:i.a.createElement("span",null,"Heptachlor - ",i.a.createElement(S,null,"C10H5Cl7")),chemFormula:!0}),i.a.createElement("ul",null,i.a.createElement("li",null,"Cause/Emission of POP: Pesticide"),i.a.createElement("li",{"data-tip":"Intentionally produced POPs are pesticides and industrial chemicals that may be traded between countries."},"Intentionally produced (",i.a.createElement("a",{href:"#terms"},"?"),")"),i.a.createElement("li",null,"It is a pesticide that is widely used in soil. It is found to be fatal at high doses to several rodents and small animals. It is a possible human carcinogen. It is mainly exposed through food for humans.")),i.a.createElement("br",null),i.a.createElement(g,{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Hexachlorobenzene.svg/1024px-Hexachlorobenzene.svg.png",text:i.a.createElement("span",null,"Hexachlorobenzene (HCB) - ",i.a.createElement(S,null,"C6Cl6")),chemFormula:!0}),i.a.createElement("ul",null,i.a.createElement("li",null,"Cause/Emission of POP: Industrial Chemicals and By-product of"),i.a.createElement("li",null,"Intentionally and Unintentionally produced"),i.a.createElement("li",null,"It is a pesticide for crops. It is also a byproduct of certain industrial chemicals and an impurity in several pesticide formulations. Eating food with HCB can lead to a variety of symptoms, including photosensitive skin lesions, colic, debilitation, and it can cause metabolic disorders. It is lethal to some animals at high doses and leads to decline in reproductive success at low doses.")),i.a.createElement("br",null),i.a.createElement(g,{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Mirex.svg/1280px-Mirex.svg.png",text:i.a.createElement("span",null,"Mirex - ",i.a.createElement(S,null,"C10Cl12")),chemFormula:!0}),i.a.createElement("ul",null,i.a.createElement("li",null,"Cause/Emission of POP: Pesticide"),i.a.createElement("li",{"data-tip":"Intentionally produced POPs are pesticides and industrial chemicals that may be traded between countries."},"Intentionally produced (",i.a.createElement("a",{href:"#terms"},"?"),")"),i.a.createElement("li",null,"It is an insecticide and is also used in fire retardant materials. It is not harmful in direct exposure but is considered a possible human carcinogen. It is one of the most stable and persistent pesticides, with a half life of up to 10 years. It is toxic to several plant species and to fish and crustaceans. Human exposure is primarily found through meat and fish.")),i.a.createElement("br",null),i.a.createElement(g,{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Toxaphen.svg/1920px-Toxaphen.svg.png",text:i.a.createElement("span",null,"Toxaphene - ",i.a.createElement(S,null,"C10H8Cl8")),chemFormula:!0}),i.a.createElement("ul",null,i.a.createElement("li",null,"Cause/Emission of POP: Pesticide"),i.a.createElement("li",{"data-tip":"Intentionally produced POPs are pesticides and industrial chemicals that may be traded between countries."},"Intentionally produced (",i.a.createElement("a",{href:"#terms"},"?"),")"),i.a.createElement("li",null,"It is an insecticide for crops and to control ticks and mites in livestock. It has a half-life of 12 years and was the most widely used presiticed in 1975 in the US. It is a possible human carcinogen and it is spread through food. It is highly toxic to fish.")),i.a.createElement("br",null),i.a.createElement(g,{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Polychlorinated_biphenyl_structure.svg/1920px-Polychlorinated_biphenyl_structure.svg.png",text:i.a.createElement("span",null,"Polychlorinated biphenyls (PCB) - ",i.a.createElement("code",null,"C",i.a.createElement("sub",null,"12"),"H",i.a.createElement("sub",null,"10\u2212x"),"Cl",i.a.createElement("sub",null,"x"))),chemFormula:!0}),i.a.createElement("ul",null,i.a.createElement("li",null,"Cause/Emission of POP: Industrial Chemicals and By-product of reactions"),i.a.createElement("li",null,"Intentionally and Unintentionally produced"),i.a.createElement("li",null,"It is used in industrial chemicals and by-products mainly in industry. There are 209 types of PCBs, 13 of which have dioxin-like toxicity. The half-lives can range from 10 days to 1.5 years. They are lethal at high doses to fish and lead to reproductive failure and immunosuppression in various wild animals. It can cause various symptoms in humans, including pigmentation of nails and mucous membranes, swelling of the eyelids, fatigue, nausea, vomiting, and developmental and behavioral problems in children.")),i.a.createElement("br",null),i.a.createElement(g,{img:"https://upload.wikimedia.org/wikipedia/commons/d/d8/PCDD_general_structure.png",text:i.a.createElement("span",null,"Polychlorinated dibenzo-p-dioxins (PCDD)"),chemFormula:!0}),i.a.createElement("ul",null,i.a.createElement("li",null,"One such example is Heptachlorodibenzo-p-dioxin",i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Heptachlorodibenzodioxin.svg/1920px-Heptachlorodibenzodioxin.svg.png",style:{width:"30%"}})),i.a.createElement("li",null,i.a.createElement(S,null,"C12HCl7O2")))),i.a.createElement("li",null,"Cause/Emission of POP: By-product of reactions"),i.a.createElement("li",{"data-tip":"Unintentional produced POPs are by-products of industrial or other processes involving combustions which are not products in commerce."},"Unintentionally produced (",i.a.createElement("a",{href:"#terms"},"?"),")"),i.a.createElement("li",null,"It is a by-product unintentionally produced due to incomplete combustion, manufacturing pesticides and other substances. They are edited mainly from burning hospitals, municipal and hazardous waste and from specific natural fuels. There are 75 types of PCDD. Seven are of main cons=cern, with one of them having a half-life of 10-12 years. They have several harmful effects in humans, such as immune and enzyme disorders and possibly being a human carcinogen. It is lethal to fish and lead to symptoms, like birth defects and death, in certain animals. Food is the major exposure of this chemical.")),i.a.createElement("br",null),i.a.createElement(g,{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/PCDF_general_structure.svg/1920px-PCDF_general_structure.svg.png",text:i.a.createElement("span",null,"Polychlorinated dibenzofurans (PCDF)"),chemFormula:!0}),i.a.createElement("ul",null,i.a.createElement("li",null,"Cause/Emission of POP: By-product of reactions"),i.a.createElement("li",{"data-tip":"Unintentional produced POPs are by-products of industrial or other processes involving combustions which are not products in commerce."},"Unintentionally produced (",i.a.createElement("a",{href:"#terms"},"?"),")"),i.a.createElement("li",null,"It is a by-product unintentionally produced like PCDD and during production of PCBs. There are 135 types, with varying toxicities, sharing similar effects like PCDD due to their similar structures. It is persistent for long periods in the environment, and it is possibly a human carcinogen. Food is the major exposure of this chemical.")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h3",{id:"terms"},"Terms defined:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Intentionally produced POPs are pesticides and industrial chemicals that may be traded between countries."),i.a.createElement("li",null,"Unintentional produced POPs are by-products of industrial or other processes involving combustions which are not products in commerce.")),i.a.createElement("br",null)),i.a.createElement(D.a,null))}}]),t}(i.a.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{overflowX:"hidden",overflowY:"hidden"}},i.a.createElement("div",{className:"container"},i.a.createElement(P.a,null,i.a.createElement("h2",{className:"display-3 text-center"},"Health Concerns")),i.a.createElement("p",null,"People and animals are mainly exposed to POPs through contaminated foods. Less common exposure routes include drinking contaminated water and direct contact with the chemicals. Additionally, in mammals, POPs can be transferred through the placenta and breast milk to developing offspring."),i.a.createElement(g,{text:i.a.createElement("div",null,i.a.createElement("p",null,"Symptoms for infected people and animals can include:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Cancer"),i.a.createElement("li",null,"Allergies"),i.a.createElement("li",null,"Hypersensitivity"),i.a.createElement("li",null,"Damage to the nervous system"),i.a.createElement("li",null,"Damage to the reproductive symptom "),i.a.createElement("li",null,"Damage to the immune system"),i.a.createElement("li",null,"Some POPs are also considered to be endocrine disruptors",i.a.createElement("ul",null,i.a.createElement("li",null,"By altering the hormonal system, it can damage the reproductive and immune systems of exposed individuals as well as their offspring; they can also have developmental and carcinogenic effects.")))))}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(P.a,null,i.a.createElement("h3",{className:"display-4 text-center"},"Child Health")),i.a.createElement(g,{text:"Fetuses, infants and children may be at especially high risk."}),i.a.createElement("p",null,"These early stages of life are when organs develop the most quickly, which means they are at their most vulnerable. Effects of POPs during childhood may not manifest until later in their lives, at which point they could suffer from reproductive, developmental, behavioral, neurologic, endocrine, and/or immunologic adverse health effects.")))}}]),t}(i.a.Component),H=a(5);var A=Object(H.f)((function(e){e.match;var t,a=e.location;e.history;return console.log(a.pathname,a.state),i.a.createElement(x,{active:(t=a.pathname,t.length<=1?"Home":t.replace("/",""))})}));var z=function(){var e=window.chrome,t=window.navigator,a=t.vendor,n="undefined"!==typeof window.opr,l=t.userAgent.indexOf("Edge")>-1;return t.userAgent.match("CriOS")||null!==e&&"undefined"!==typeof e&&"Google Inc."===a&&!1===n&&!1===l||(console.log("NO CHROME"),"ReactSnap"!==navigator.userAgent&&window.setTimeout((function(){return alert("Hi, it appears you are not using Google Chrome. This website will still work but you will get the best experience if you switch to Google Chrome.")}),1e3)),i.a.createElement(E.a,{basename:"/POPs"},i.a.createElement(A,null),i.a.createElement(H.c,null,i.a.createElement(H.a,{path:"/ManagementAndRemediation"},i.a.createElement(k,null)),i.a.createElement(H.a,{path:"/WorksCited"},i.a.createElement(I,null)),i.a.createElement(H.a,{path:"/POPsTechnicalDefinition"},i.a.createElement(T,null)),i.a.createElement(H.a,{path:"/DirtyDozen"},i.a.createElement(j,null)),i.a.createElement(H.a,{path:"/Health"},i.a.createElement(N,null)),i.a.createElement(H.a,{path:"/"},i.a.createElement(O,null))),i.a.createElement("footer",{className:"d-flex justify-content-between flex-wrap"},i.a.createElement("p",null,i.a.createElement("a",{href:"#"},"Go back to top")),i.a.createElement("p",null,"Thanks for reading!"),i.a.createElement("p",null,"Made with \u2764\ufe0f for NJIT Chemistry Olympiad")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=document.getElementById("root");B.hasChildNodes()?r.a.hydrate(i.a.createElement(z,null),B):r.a.render(i.a.createElement(z,null),B),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[112,1,2]]]);
//# sourceMappingURL=main.be119442.chunk.js.map