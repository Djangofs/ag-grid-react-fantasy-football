export default (params) => {
  if (params.value) {
    const imgName = params.value.toLowerCase().replace(' ', '_');
    return `<img border='0' width='18' height='18' style='margin-bottom: 2px' src='../assets/images/${imgName}.png'> ${params.value}`;
  } else {
    return null;
  }
}