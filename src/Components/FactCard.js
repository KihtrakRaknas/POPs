import React from 'react';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Citation from './Citation'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class FactCard extends React.Component {
    constructor(props){
        super(props)
        this.firstColor = '#'+Math.random().toString(16).substr(2,6)+"30"
        this.secondColor = '#'+Math.random().toString(16).substr(2,6)+"30"
        this.left = Math.random()>.5
    }
    state={
        yPos:Math.random()*10-5,
        showSource:false,
    }
    componentDidMount(){
        this.upBob = Math.random()>.5
        var isChromium = window.chrome;
        var winNav = window.navigator;
        var vendorName = winNav.vendor;
        var isOpera = typeof window.opr !== "undefined";
        var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
        var isIOSChrome = winNav.userAgent.match("CriOS");

        if (isIOSChrome) {
            setInterval(()=>{
                if(this.state.yPos>5)
                    this.upBob = false
                else if(this.state.yPos<-5)
                    this.upBob = true
                let changeFactor = (1-Math.pow(Math.abs(this.state.yPos)/5,2))*.1+.00002
                this.setState({yPos:this.upBob?this.state.yPos+changeFactor:this.state.yPos-changeFactor})
            },10)
        } else if(
        isChromium !== null &&
        typeof isChromium !== "undefined" &&
        vendorName === "Google Inc." &&
        isOpera === false &&
        isIEedge === false
        ) {
            setInterval(()=>{
                if(this.state.yPos>5)
                    this.upBob = false
                else if(this.state.yPos<-5)
                    this.upBob = true
                let changeFactor = (1-Math.pow(Math.abs(this.state.yPos)/5,2))*.1+.00002
                this.setState({yPos:this.upBob?this.state.yPos+changeFactor:this.state.yPos-changeFactor})
            },10)
        } else { 
            this.setState({yPos:0})
        }

    }
    render(){
        let divEl=<div>
            <div style={{
                backgroundImage:"linear-gradient(to bottom right, "+this.firstColor+", "+this.secondColor+")", 
                borderRadius:5, 
                borderColor:"grey", 
                borderStyle:"solid", 
                borderWidth:2, 
                padding:5, 
                marginTop:10, 
                marginBottom:10, 
                width:"100%",
                boxShadow: (5-this.state.yPos)/2+"px "+(5-this.state.yPos)+"px lightgrey",
                transition: "transform 100ms linear",
                transform: "translateY("+this.state.yPos+"px) translateX("+this.state.yPos/2+"px)"
            }} ref={this.absPosDiv}>
                {this.props.img && <img src={this.props.img} className="factCardImg rounded mx-auto d-block"/>}
                {this.props.chemFormula?<p className="text-center" style={{margin:0, fontSize:"40px", textIndent: 0, fontWeight:"bold"}}>{this.props.text}</p>:<p style={{margin:0, fontSize:"x-large", textIndent: 0}}>{this.props.text}</p>}
                {!this.state.showSource && (this.props.src||this.props.link) && <p style={{textAlign:"right",padding:0,margin:0, animation: "fadeIn ease 10s"}}><small onClick={()=>this.setState({showSource:true})}>{this.props.src?"View Source":"Show Corresponding Page"}</small></p>}
                {this.state.showSource && <p style={{textAlign:"right",padding:0,margin:0}}><small style={{animation: "fadeIn ease 2s"}}>{this.props.src?<a href={this.props.src}>{this.props.src}</a>:<Link to={this.props.link}>{this.props.link}</Link>}</small></p>}
            </div>
        </div>
        if (navigator.userAgent === 'ReactSnap')
            return divEl;
        return(
            <LightSpeed left={this.left} right={!this.left} className="factCard">
                {divEl}
            </LightSpeed>
        )
    }
}