const apiUrl = 'https://api.example.com/employees';

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data; // return the fetched data
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // in case of error
}

export default fetchData;