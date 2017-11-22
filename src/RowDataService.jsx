import data from "./data.json";

const getRowData = () => {
  const rowData = [];

  data.elements.forEach(element => {
    const form = parseFloat(element.form);
    const ict_index = parseFloat(element.ict_index);
    const selected_by_percent = parseFloat(element.selected_by_percent);
    const now_cost = element.now_cost / 10;
    rowData.push(Object.assign(element, {form, ict_index, selected_by_percent, now_cost}));
  });

  return rowData;
}

export default {getRowData};