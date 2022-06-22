import { Component } from 'react';
import logo from '../logo.svg';

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                    <img src={logo} alt="" width="40" height="34" class="d-inline-block align-text-top"/>
                    Il Progresso 
                    </a>
                </div>
            </nav>
        );
    }
}

export default Navbar;