export const getChartData = (datatypes) => {
  return Object.entries(datatypes).reduce(
    (acc, [key, value]) => {
      return { labels: [...acc.labels, key], data: [...acc.data, value] };
    },
    { labels: [], data: [] }
  );
};

export const getTableData = (data) => {
  return data
    .sort((a, b) => a.association_score.overall < b.association_score.overall)
    .slice(0, 5);
};
