'use strict';

import React,{Component} from 'react';
import ProTypes from "prop-types";

export default class AddUser extends Component{
    static get proTypes(){
        return{
            addUser: ProTypes.func
        }
    }

    constructor (props){
        super(props);
    }

    onNameChange(event){
        event.preventDefault();
        event.stopPropagation();
        this.name=event.target.value;
    }

    onSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        if (this.name){
            this.props.addUsers({name:this.name});
            this.name='';
        }
    }
    render() {
        return <div>
            <form onSubmit={event => this.onSubmit(event)}>
                <label>Name: </label>
                <input type="text" onChange={event => this.onNameChange(event)}/>
                <button type="Submit">Add</button>
            </form>
        </div>
    }
}