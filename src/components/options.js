import { Component } from "react";

class Options extends Component {
    render() {
        return (
            <>
                <div class=""> 
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">⚙️ Impostazioni</button>
                </div>
                <div style={{minHeight: '120px'}}>
                    <div class="collapse collapse-horizontal mt-3" id="collapseWidthExample">
                        <div class="card card-body" style={{width: '300px'}}>
                            <h3><span class="badge bg-secondary">Sitografia</span></h3>
                            <a target={"_blank"} href="https://it.wikipedia.org/wiki/Futurismo" class="stretched-link-1">Wikipedia Futurismo</a>
                            <a target={"_blank"} href="https://it.wikipedia.org/wiki/Manifesto_del_Futurismo" class="stretched-link-2">Wikipedia Manifesto Futurismo</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Options;