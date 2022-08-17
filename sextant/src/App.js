import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import * as React from 'react';

function App() {
    return (
        <div className="App">
            <Banner bannerName="Cisco Sextant"/>
            <Exhibit name={"First Exhibit"}/>
            <Exhibit name={"Second Exhibit"}/>
            <Exhibit name={"Third Exhibit"}/>
        </div>

    );
}

export default App;
