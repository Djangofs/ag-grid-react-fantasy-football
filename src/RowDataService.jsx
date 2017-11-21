import data from "./data.json";

const getRowData = () => {
  const rowData = [];

  data.elements.forEach(element => {
    const form = parseFloat(element.form);
    const ict_index = parseFloat(element.ict_index);
    const selected_by_percent = parseFloat(element.selected_by_percent);
    rowData.push(Object.assign(element, {form, ict_index, selected_by_percent}));
  });

  return rowData;
}

export default {getRowData};