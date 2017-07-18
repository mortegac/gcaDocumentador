import React, {Component} from 'react';

class Footer extends Component {
  render () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <p><strong>GCA DESARROLLOS TECNOLOGICOS</strong></p>
                    <div id="social">
                        <div className="nav-center">
                            <a className="nav-item" href="#"><span className="icon"><i className="fa fa-github"></i></span></a>
                            <a className="nav-item" href="#"><span className="icon"><i className="fa fa-twitter"></i></span></a>
                        </div>
                    </div>

                </div>
            </div>
        </footer> 
    )
  }
}

export default Footer;
