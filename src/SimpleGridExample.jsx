import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";
import data from "./data.json";

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: this.createColumnDefs(),
            rowData: data.elements,
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;

        this.gridApi.sizeColumnsToFit();
    }

    createColumnDefs() {
        return [
            {headerName: "First Name", field: "first_name"},
            {headerName: "Last Name", field: "second_name"},
            {headerName: "Minutes", field: "minutes"},
            {headerName: "Goals Scored", field: "goals_scored"},
            {headerName: "Assists", field: "assists"},
            {headerName: "Bonus", field: "bonus"},
            {headerName: "Yellow Cards", field: "yellow_cards"},
            {headerName: "Red Cards", field: "red_cards"},
            {headerName: "Form", field: "form"},
            {headerName: "ICT Index", field: "ict_index"},
            {headerName: "Selected %", field: "selected_by_percent"},
            {headerName: "Total Points", field: "total_points"},
        ];
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
                    rowData={this.state.rowData}

                    // events
                    onGridReady={this.onGridReady}>
                </AgGridReact>
            </div>
        )
    }
};
