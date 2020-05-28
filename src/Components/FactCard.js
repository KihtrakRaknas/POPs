import React from 'react';
export default class FactCard extends React.Component {
    state={
        yPos:Math.random()*6-3,
    }
    componentDidMount(){
        this.upBob = Math.random()>.5
        setInterval(()=>{
            if(this.state.yPos>3)
                this.upBob = false
            else if(this.state.yPos<-3)
                this.upBob = true
            let changeFactor = (Math.abs(this.state.yPos)-3)*.2
            this.setState({yPos:this.upBob?this.state.yPos+changeFactor:this.state.yPos-changeFactor})
        },100)
    }
    render(){
        return(
                <div style={{
                    backgroundImage:"linear-gradient(to bottom right, red, yellow)", 
                    borderRadius:5, 
                    borderColor:"grey", 
                    borderStyle:"solid", 
                    borderWidth:2, 
                    padding:5, 
                    marginTop:10, 
                    marginBottom:10, 
                    width:"100%",
                    boxShadow: (5-this.state.yPos)/2+"px "+(5-this.state.yPos)+"px lightgrey",
                    transition: "transform 200ms ease-in",
                    transform: "translateY("+this.state.yPos+"px) translateX("+this.state.yPos/2+"px)"
                }} ref={this.absPosDiv}>
                    <p>{this.props.text}</p>
                    <small style={{textAlign:"right"}}>View Source</small>
                </div>
        )
    }
}