import React, { Component } from 'react'
import UserNavBar from '../User/UserNavbar';
import  ResturantFood from './ResturantFood';
export default class Food extends Component {
    render() {
        return (
            <div>
                <UserNavBar />
                <ResturantFood /> />
            </div>
        )
    }
}
