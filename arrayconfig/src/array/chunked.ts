function chunked_data(data: any[], separate: number) {
  let chunked: [][] = [];
  for (let i = 0; i < data.length; i += separate) {
    const chunk = data.slice(i, i + separate);
    chunked.push(chunk as []);
  }
  return chunked;
}

export { chunked_data };
