const FETCH_URL = 'https://jsonplaceholder.typicode.com/users';

const fetchData = async () => {
  try {
    const response = await fetch(FETCH_URL);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default fetchData;
