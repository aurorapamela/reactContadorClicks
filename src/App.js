import React from "react";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav class=" header navbar navbar-dark bg-dark">
          <div class="container">
            <div class="row m-auto">
              <i class="fa fa-hand-pointer-o fa-4x text-white" />
              <div class="h1 ml-2 my-auto text-light" href="/">
                Contador de clicks
              </div>
            </div>
          </div>
        </nav>
        <div class="mt-5">
          <div class="container">
            <div class="clicker border border-secondary rounded">
              <div class="clicker-display d-flex align-items-center bg-light text-secondary">
                <div class="mx-auto display-1">0</div>
              </div>
              <div class="clicker-button-panel d-flex flex-row">
                <button class="btn btn-success w-100">
                  <i class="fa fa-plus fa-2x" />
                </button>
                <button class="btn btn-warning w-100">
                  <i class="fa fa-refresh fa-2x" />
                </button>
                <button class="btn btn-danger w-100">
                  <i class="fa fa-minus fa-2x" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
