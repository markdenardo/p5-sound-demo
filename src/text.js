import { render } from "@testing-library/react";

import React from 'react';
import Clock from './Clock'

const Text = () => {
    return (<div className="Text">
        <header>MDN</header>
            <div>Instagram</div>
            <div>CV</div>
            <div>Github</div>
            <Clock/>
            </div>
           )
}
export default Text;