/**
 * Created by chenkang1 on 2017/6/3.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchIssuesIfNeeded} from '../actions'
import CellView from '../components/CellView'


class All extends Component {

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(fetchIssuesIfNeeded('create',1000))
    }

    componentWillReceiveProps(){
        console.log('all receive props')
    }

    render() {
        if (this.props.isFetching){
            return null;
        }

        return (
            <div className="list">
                <CellView title="全部" items={this.props.items}/>
            </div>
        )
    }
}


const mapStateToProps = state =>{
    const {
        isFetching,
        items
    } = state || {
        isFetching:true,
        items:[]
    };

    return {
        isFetching,
        items
    }
};


export default connect(mapStateToProps)(All);