import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";
import data from "./data.json";
import RowDataService from "./RowDataService";
import ColumnDefinitionService from "./ColumnDefinitionService";

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: ColumnDefinitionService.createColumnDefs(),
            playerData: RowDataService.getRowData()
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;

        this.gridApi.sizeColumnsToFit();
    }

    render() {
        let containerStyle = {
            height: 500,
            width: 1000
        };

        return (
            <div style={containerStyle} className="ag-fresh">
                <h1>Simple ag-Grid React Example</h1>
                <AgGridReact
                    // properties
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.playerData}
                    enableSorting
                    enableFilter
                    enableColResize

                    // events
                    onGridReady={this.onGridReady}>
                </AgGridReact>
            </div>
        )
    }
};
