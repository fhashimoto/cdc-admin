import React, {Component} from 'react';

export default class SubmitCustomizado extends Component{
    render(){
        return(
            <div className='pure-control-group'>
                <label></label>
                <button type={this.props.type} className={this.props.className}>{this.props.label}</button>
            </div>
        )
    }
}