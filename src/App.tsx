import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>New heading</h1>

            <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Corl0207_%2828225976491%29.jpg"
                alt="A dope shark"
            />

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Nicholas Keenan Hello World
            </p>
        </div>
    );
}

export default App;
