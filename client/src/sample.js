import React, {Component} from 'react';

export default class Sample extends Component{
    render(){
        return(
            <div>
                <p>Helllo from sample</p>
                <br/>
                <strong>{this.props.name}</strong>

            </div>
        )
    }
}