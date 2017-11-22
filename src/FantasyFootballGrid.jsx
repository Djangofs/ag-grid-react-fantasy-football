import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";
import data from "./data.json";
import RowDataService from "./RowDataService";
import ColumnDefinitionService from "./ColumnDefinitionService";

export default class extends Component {
    constructor() {
        super();

        this.state = {
            columnDefs: ColumnDefinitionService.createColumnDefs(),
            playerData: RowDataService.getRowData(),
            rowSelection: "multiple"
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

    clearSelected = () => {
        this.gridApi.deselectAll();
    }

    selectAll = () => {
        this.gridApi.selectAll();
    }

    render() {
        let containerStyle = {
            height: 500,
            width: 1500
        };

        return (
            <div>
                <h1>Fantasy Football Grid</h1>
                <button onClick={() => { this.toggleGrouping() }}>Toggle Grouping</button>
                <button onClick={() => { this.clearSelected() }}>Clear Selected</button>
                <button onClick={() => { this.selectAll() }}>Select All</button>
                <div style={containerStyle} className="ag-fresh">
                    <AgGridReact
                        // events
                        onGridReady={this.onGridReady}
                        // properties
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.playerData}
                        rowSelection={this.state.rowSelection}
                        groupSelectsChildren={true}
                        suppressRowClickSelection={true}
                        enableSorting
                        enableFilter
                        enableColResize>
                    </AgGridReact>
                </div>
            </div>
        )
    }
};
