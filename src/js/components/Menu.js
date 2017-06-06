/**
 * Created by chenkang1 on 2017/6/6.
 */
import React,{Component} from 'react'
import {Link} from 'react-router'

export default class Menu extends Component{

    render(){
        return(
            <div id="home">
                <div className="avatar">
                    <a href="https://github.com/cobish"></a>
                </div>
                <div>cobish</div>
                <div className="link">
                    <Link to="all">全部</Link>
                    <Link to="all">归档</Link>
                    <Link to="all">标签</Link>
                </div>
            </div>
        )
    }
}