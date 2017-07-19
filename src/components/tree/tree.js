import React, {Component} from 'react';
import './tree.css';


class Tree extends Component {
  render () {
    return (
        <ul className="tree">
            <li><a href="#">uno</a>
                <ul>
                    <li><a href="#">A</a></li>
                    <li><a href="#">B</a></li>
                    <li><a href="#">C</a></li>
                </ul>
            </li>
            <li><a href="#">dos</a></li>
            <li><a href="#">tres</a></li>
        </ul>       
    )
  }
}

export default Tree;
