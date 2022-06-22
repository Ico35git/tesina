import { Component } from 'react';

class Accordion extends Component {
    render() {
        return (
            <>
                <div class="accordion-item">
                    <h2 class="accordion-header" id={this.props.htmlId}>
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={this.props.htmlId3} aria-expanded="false" aria-controls={this.props.htmlId2}>
                        {this.props.title}
                    </button>
                    </h2>
                    <div id={this.props.htmlId2} class="accordion-collapse collapse" aria-labelledby={this.props.htmlId} data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            {this.props.content}
                        </div>
                        <div>
                            <img className='d-inline p-2' src={this.props.img} height={this.props.height}></img>
                            <img className='d-inline p-2' src={this.props.img2} height={this.props.height}></img>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Accordion;