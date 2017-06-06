/**
 * Created by chenkang1 on 2017/6/6.
 */
import React, {Component} from 'react'
import Cell from './Cell'

export default class CellView extends Component {

    render() {
        return (
            <div>
                <h2 className="category">{this.props.title}</h2>
                <ul>
                    {
                        this.props.items.map((item,index)=>{
                            return <Cell {...item} key={index} />
                        })
                    }
                </ul>
            </div>
        )
    }
}