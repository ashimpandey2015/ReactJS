'use strict';

import React, {Component} from 'react';
import ProTypes from 'prop-types';

import User from './User.jsx';

export default class Users extends Component{
    static get propTypes(){
        return {
            users:ProTypes.array
        }
    }
    constructor(props){
        super(props);
    }

    render() {
        const {users}=this.props;
        return<div>
            <table>
                <thread>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                </thread>
                <tbody>
                {
                    users.map(user => {
                    return <User key={user.id} user={user}/>
                })
                }
                </tbody>
            </table>
    }
}