import React from 'react';
import Counter from "./components/Counter";
import './index.scss'

const App = () => {
    return (
        <div className="app">
            There is an APP
            <Counter />
        </div>
    );
};

export default App;