import { Component } from "react";

class DropItem extends Component {
    render() {
        return(
            <>
                <li><a class="dropdown-item" href={this.props.href}>{this.props.title}</a></li>
            </>
        );
    }
}

export default DropItem;