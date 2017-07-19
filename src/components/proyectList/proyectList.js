import React, {Component} from 'react';
import Card from '../card/card'
/*        <div className="columns is-mobile">

            <div className="column"><Card></Card></div>
            <div className="column"><p className="notification is-info">1</p></div>
            <div className="column"><p className="notification is-info">1</p></div>
            <div className="column"><p className="notification is-info">1</p></div>
            <div className="column"><p className="notification is-info">1</p></div>
            
        </div> */
class ProyectList extends Component {
  render () {
    return (
        <div className="columns is-desktop">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    )
  }
}

export default ProyectList;



