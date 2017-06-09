/**
 * Created by chenkang1 on 2017/6/7.
 */
import React from 'react';

class Ele extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e){
        this.props.upperTextChange(e);
    }

    render() {
        console.log(this.props.textVal);

        // this.props.textVal = 20
        return (
            <div>
                <p>{this.props.textVal}</p>
                <input onChange={this.handleChange}/>
            </div>
        )
    }
}


export default class BoubleBind extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.upperTextChange = this.upperTextChange.bind(this);
        this.state = {
            textVal: 'init'
        }
    }

    componentDidMount() {

    }

    upperTextChange(e){
        console.log(e);
        this.setState({
            textVal:e.target.value
        })
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
                <Ele textVal={this.state.textVal} upperTextChange={this.upperTextChange}/>
            </div>

        )
    }
}


