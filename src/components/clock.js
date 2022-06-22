import { Component } from "react";

class Clock extends Component {

    constructor() {
        super();
        this.state = { time: new Date() }; 
    }

    componentDidMount() { 
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000); 
    }

    componentWillUnmount() { 
        clearInterval(this.update);
    }

    toggleClock() {
        var time = document.getElementById("clock");
        var button = document.getElementById("toggleClockBtn");
        if(time.classList.contains("invisible")) {
            time.classList.remove("invisible");
            button.innerHTML = "🕵️ Nascondi";
        }else {
            time.classList.add("invisible");
            button.innerHTML = "📂 Mostra";
        }
    }
    render() {
        const { time } = this.state;
        return (
            <>
                <div className='time ps-3 mt-3 mb-5 bg-body rounded'>
                    <h3 className="clock d-inline" id="clock">
                        ⌚{time.toLocaleTimeString()}
                    </h3>
                    <button id="toggleClockBtn" className="ms-3 btn btn-primary" onClick={this.toggleClock}>
                        🕵️ Nascondi
                    </button>
                </div>
            </>
        );
    }
}

export default Clock;