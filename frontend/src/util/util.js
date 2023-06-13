const formatCrawlDate = isoDate => {
  const date = new Date(isoDate);
  return `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear().toString().substr(-2)}`;
};

export { formatCrawlDate };
