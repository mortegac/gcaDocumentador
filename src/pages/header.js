import React, {Component} from 'react';

import HeaderNav from '../components/headerNav/headerNav'
import HeaderBody from '../components/headerBody/headerBody'


class Header extends Component {
  render () {
    return (
     <section className="hero is-info">
           
           <HeaderNav></HeaderNav>
           
           <HeaderBody></HeaderBody>

        </section>
    )
  }
}

export default Header;
