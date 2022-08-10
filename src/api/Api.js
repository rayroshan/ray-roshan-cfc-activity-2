export const getApiData = async () => {

  const response = await fetch('https://healthycanadians.gc.ca/recall-alert-rappel-avis/api/recent/en');
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch data.");
  }

  return data?.results;
};
