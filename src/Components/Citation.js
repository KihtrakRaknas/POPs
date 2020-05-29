import React from 'react';
export default class Citation extends React.Component {
    render(){
        return(
        <p style={{marginLeft: 40, textIndent: -40, marginBottom:0, fontFamily: '"Times New Roman", Times, serif', fontSize: "12pt", marginBottom: "1rem"}}>{this.props.citation}</p>
        )
    }
}