'use strict';

import React from "react";
import {render} from "react-dom";

// pull in the ag-grid styles we're interested in
import "ag-grid-root/dist/styles/ag-grid.css";
import "ag-grid-root/dist/styles/theme-fresh.css";
import "./styles.css"

// only necessary if you're using ag-Grid-Enterprise features
import "ag-grid-enterprise";

// our application
import FantasyFootballGrid from "./FantasyFootballGrid";

render(
    <FantasyFootballGrid/>,
    document.querySelector('#app')
);
