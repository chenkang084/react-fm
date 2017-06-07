/**
 * Created by chenkang1 on 2017/6/7.
 */
import React from 'react';

class Ele extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props.textVal)

        // this.props.textVal = 20
        return (
            <div>{this.props.textVal}</div>
        )
    }
}


export default class BoubleBind extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            textVal: 'init'
        }
    }

    componentDidMount() {

    }

    handleChange(e) {
        // console.log(e);
        let val = e.target.value;
        this.setState((preValue, props) => {
            console.log(preValue);
            return {
                textVal: val
            }
        })
    }

    render() {
        return (

            <div>
                <p>props:{this.props.text}</p>
                <p>state:{this.state.textVal}</p>
                <input onChange={this.handleChange}/>
                sub:
                <Ele textVal={this.state.textVal}/>
            </div>

        )
    }
}


