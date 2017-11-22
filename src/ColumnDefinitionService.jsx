import TeamCellRenderer from "./TeamCellRenderer";

const createColumnDefs = () => {
  const formClassRules = {
      'rag-green': 'x => 6',
      'rag-amber': 'x >= 4 && x < 6',
      'rag-red': 'x < 4'
  }
  const ictIndexClassRules = {
      'rag-green': 'x => 90',
      'rag-amber': 'x >= 60 && x < 90',
      'rag-red': 'x < 60'
  }
  const selectedPercentClassRules = {
      'rag-green': 'x => 20',
      'rag-amber': 'x >= 10 && x < 20',
      'rag-red': 'x < 10'
  }
  return [
      {
          headerName: "Player Details",
          children: [
              {headerName: "First Name", field: "first_name"},
              {headerName: "Last Name", field: "second_name"},
              {headerName: "Team", field: "team_name", cellRenderer: TeamCellRenderer, rowGroup: true, hide: true}
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
              {headerName: "Form", field: "form", filter: "number", cellClassRules: formClassRules},
              {headerName: "ICT Index", field: "ict_index", filter: "number", cellClassRules: ictIndexClassRules},
              {headerName: "Selected %", field: "selected_by_percent", filter: "number", cellClassRules: selectedPercentClassRules},
              {headerName: "Cost", field: "now_cost", filter: "number"},
              {headerName: "Total Points", field: "total_points", filter: "number"},
          ]
      }
  ];
}

export default {createColumnDefs};