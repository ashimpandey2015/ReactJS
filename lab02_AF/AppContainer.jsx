'use strict'

import React,{Component} from 'react';
import AddUser from './AddUser';
import Users from './Users';

export default class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state ={
            users:[{
                id:Date.now(),
                name:'Ashim'
            }]
        }
    }

    addUser(user){
    this.setState(state=> ({
        users: state.users.concat({id:Date.now(),name:user.name})
    }))
    }

    render() {
        return <div>
            <h2>Hello World!!</h2>
            <Users users={this.state.users}/>
        </div>
    }
}