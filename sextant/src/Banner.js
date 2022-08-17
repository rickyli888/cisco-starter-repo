import './Banner.css';
import * as React from 'react';

function Banner(props) {
    return (
        <div className={"Banner"}>
            <h1>{props.bannerName}</h1>
        </div>
    );
}

export default Banner;
