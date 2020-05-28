import React from 'react';
import FactCard from '../Components/FactCard';
export default class HomeScreen extends React.Component {
    render(){
        return(
            <div className="container">
                <FactCard text="FACT" src="SOURCE"/>
                <FactCard text="FACT" src="SOURCE"/>
                <FactCard text="FACT" src="SOURCE"/>
                <FactCard text="FACT" src="SOURCE"/>
            </div>
        )
    }
}