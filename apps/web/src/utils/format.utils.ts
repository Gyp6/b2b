export const formatMsToSeconds = (ms: number, decimals: number = 3): string => {
  return (ms / 1000).toFixed(decimals);
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};