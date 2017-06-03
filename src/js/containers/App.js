/**
 * Created by chenkang1 on 2017/6/3.
 */
import React, {Component} from 'react'
import { Link } from 'react-router';

class App extends Component {

    render() {
        return (
            <div>
                <div>title</div>
                <div>
                    <Link to="/Nav">Nav</Link>
                    <Link to="/Nav2">Nav2</Link>
                    {/*<Link to="/">标签</Link>*/}
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default App;