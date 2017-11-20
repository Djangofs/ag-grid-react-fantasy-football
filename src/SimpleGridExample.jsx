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
            {
                headerName: "Player Details",
                children: [
                    {headerName: "First Name", field: "first_name"},
                    {headerName: "Last Name", field: "second_name"},
                    {headerName: "Team", field: "team"},
                    {headerName: "Number", field: "squad_number"}
                ]
            },
            {
                headerName: "Key Stats",
                children: [
                    {headerName: "Minutes", field: "minutes", filter: "number"},
                    {headerName: "Goals Scored", field: "goals_scored", filter: "number"},
                    {headerName: "Assists", field: "assists", filter: "number"},
                    {headerName: "Bonus", field: "bonus", filter: "number"},
                    {headerName: "Yellow Cards", field: "yellow_cards", columnGroupShow: "open", filter: "number"},
                    {headerName: "Red Cards", field: "red_cards", columnGroupShow: "open", filter: "number"},
                ]
            },
            {
                headerName: "Insights",
                children: [
                    {headerName: "Form", field: "form", filter: "number"},
                    {headerName: "ICT Index", field: "ict_index", filter: "number"},
                    {headerName: "Selected %", field: "selected_by_percent", filter: "number"},
                    {headerName: "Total Points", field: "total_points", filter: "number"},
                ]
            }
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
