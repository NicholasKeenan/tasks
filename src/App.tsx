import React from "react";
import "./App.css";
import "./Rectangle.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    const rectangleStyle = {
        width: "100px",
        height: "50px",
        backgroundColor: "#fb6161",
    };

    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>

            <Container>
                <Row>
                    <Col>
                        First Collumn. Stuff and things
                        <div style={rectangleStyle}></div>
                    </Col>
                    <Col>
                        Second column.
                        <div style={rectangleStyle}></div>
                        <h1>New heading</h1>
                        <Button
                            onClick={() => {
                                console.log("I am logged");
                            }}
                        >
                            Click Me
                        </Button>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Corl0207_%2828225976491%29.jpg"
                            alt="A dope shark"
                        />
                        <h2>Why this shark is so cool</h2>
                        <ol>
                            <li>1. Just look at it</li>
                            <li>2. It is super fast</li>
                            <li>3. It has probably never killed anyone</li>
                        </ol>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. Nicholas Keenan Hello
                            World
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
