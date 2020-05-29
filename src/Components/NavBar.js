
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class NavBar extends React.Component {
    constructor(props){
        super(props)
        console.log("NEW")
        this.state={
            alpha:this.props.active == "Home"?window.scrollY/window.innerHeight:1
        }
    }
    componentWillReceiveProps(newProps){
        console.log(newProps.active + " - "+this.props.active)
        this.setState({alpha:newProps.active == "Home"?window.scrollY/window.innerHeight:1})
    }
    componentDidMount(){
        window.addEventListener('scroll',this.scrolled)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.scrolled)
    }
    scrolled = () => {
        if(this.props.active == "Home")
            this.setState({alpha:window.scrollY/window.innerHeight})
    }

    render(){
        console.log(this.props.active)
        return(
            <div>
                {this.props.active!="Home" && <div>
                    <br/><br/><br/>
                </div>}
                <nav className={`navbar navbar-expand-lg fixed-top navbar-dark`} style={{backgroundColor: "rgba(0,0,0,"+this.state.alpha+")"}}>
                    <a className="navbar-brand" href="https://kihtrak.com/POPs">All About POPs</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <Link className={`nav-item nav-link ${this.props.active == "Home"?"active":""}`} to="/">Home</Link>
                            <Link className={`nav-item nav-link ${this.props.active == "POPsTechnicalDefinition"?"active":""}`} to="/POPsTechnicalDefinition">POPs Technical Definition</Link>
                            <Link className={`nav-item nav-link ${this.props.active == "DirtyDozen"?"active":""}`} to="/DirtyDozen">Dirty Dozen</Link>
                            <Link className={`nav-item nav-link ${this.props.active == "Health"?"active":""}`} to="/Health">Health</Link>
                            <Link className={`nav-item nav-link ${this.props.active == "ManagementAndRemediation"?"active":""}`} to="/ManagementAndRemediation">Management & Remediation</Link>
                            <Link className={`nav-item nav-link ${this.props.active == "WorksCited"?"active":""}`} to="/WorksCited">Works Cited</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}