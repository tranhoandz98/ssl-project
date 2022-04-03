import React from "react";
import { render } from "react-dom";
import WrapApp from "./WrapApp";
import { BrowserRouter } from 'react-router-dom';


render(
    <BrowserRouter>
        <React.StrictMode>
            <WrapApp />
        </React.StrictMode>
    </BrowserRouter >,
    document.getElementById('root')
);
