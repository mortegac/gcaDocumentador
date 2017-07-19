import React, { Component } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import SweetAlert from 'sweetalert-react'; // eslint-disable-line import/no-extraneous-dependencies
import 'sweetalert/dist/sweetalert.css';



class Alert extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div>
        <button className="button" onClick={() => this.setState({ show: true })}>Alert</button>
        <SweetAlert
          show={this.state.show}
          title="Demo"
          html
          text={renderToStaticMarkup(<h1>SweetAlert in React</h1>)}
          onConfirm={() => this.setState({ show: false })}
        />
      </div>
    );
  }
}


export default Alert;