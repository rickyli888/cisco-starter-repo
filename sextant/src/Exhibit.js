import './Exhibit.css';
import * as React from 'react';

function Exhibit(props) {
    return (
        <div className={"Exhibit"}>
            <h2>{props.name}</h2>
            <div className="ExhibitContent">
                {props.children}
            </div>
        </div>
    );
}

export default Exhibit;
