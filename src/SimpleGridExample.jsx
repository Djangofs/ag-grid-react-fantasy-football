import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-enterprise";
import data from "./data.json";
import RowDataService from "./RowDataService";
import ColumnDefinitionService from "./ColumnDefinitionService";

export default class extends Component {
    constructor() {
        super();

        this.state = {
            columnDefs: ColumnDefinitionService.createColumnDefs(),
            playerData: RowDataService.getRowData()
        }
    }

    onGridReady = (params) => {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    };

    toggleGrouping = () => {
        if (this.columnApi.getRowGroupColumns().length > 0) {
            this.columnApi.removeRowGroupColumn('team_name');
        } else {
            this.columnApi.addRowGroupColumn('team_name');
        }
    }

    render() {
        let containerStyle = {
            height: 500,
            width: 1300
        };
        console.log(this);
        return (
            <div>
                <h1>Simple ag-Grid React Example</h1>
                <button onClick={() => { this.toggleGrouping() }}>Toggle Grouping</button>
                <div style={containerStyle} className="ag-fresh">
                    <AgGridReact
                        // events
                        onGridReady={this.onGridReady}
                        // properties
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.playerData}
                        enableSorting
                        enableFilter
                        enableColResize
                        >
                    </AgGridReact>
                </div>
            </div>
        )
    }
};
