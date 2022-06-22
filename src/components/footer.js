import { Component } from "react";
import logo from '../logo.svg';

class Footer extends Component {
    render() {
        return(
            <div className='footer'>
              <img src={logo} className="App-logo" alt="logo"></img>
              <img src='https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg' className="boot-logo" alt="logo" height="6"></img>
              <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.xQJlilCdJ7U2ebPvc8DYLwHaIJ%26pid%3DApi&f=1' className="node-logo" alt="logo"></img>
            </div>
        );
    }
}

export default Footer;