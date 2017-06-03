import React, { Component } from 'react';
import { connect } from 'react-redux';
import { helloAction } from '../actions/hello.action.js';

class Hello extends Component{

    constructor(){
        super();

    }

    componentDidMount(){
        const {dispatch} = this.props

        dispatch(helloAction('hello'))
        console.log()
    }

    render(){


        return(
            <div>
                hello
            </div>
        )
    }
}

export default connect()(Hello)