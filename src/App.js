import { Component } from 'react';
import './App.css';
import './js/theme';

import accordions from "./json/accordions.json";

import Navbar from './components/navbar';
import Accordion from "./components/accordion";
import DropItem from './components/dropItem';
import Footer from "./components/footer";
import Clock from './components/clock';

class App extends Component {
  render() {
    return (
      <>
        <div classNameName='body'>
          <Navbar />
          <div classNameName='container'>
              <Clock/>
            <div className="accordion accordion-flush mt-3" id="accordionFlushExample">
              {
                accordions.items.map(a => (
                  <Accordion
                    key={a.id}
                    htmlId={a.htmlId}
                    htmlId2={a.htmlId2}
                    htmlId3={a.htmlId3}
                    title={a.title}
                    img={a.img}
                    img2={a.img2}
                    height={a.height}
                    content={a.content}
                  />
                ))
              }
            </div>
              <div className='ms-3'>
                <div className='btns'>
                  <div className='buttons'>
                    <div className="dropdown">
                      <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          📚 Lista Argomenti
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <DropItem
                          key={0}
                          title="❌ Esci"
                          href="/"
                        />
                        {
                          accordions.items.map(a => (
                            <DropItem
                              key={a.id + 1}
                              title={a.title}
                              href={a.htmlId3}
                            />
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            <Footer />
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
      </>
    );
  }
}

export default App;
