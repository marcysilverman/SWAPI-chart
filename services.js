
export default {
  getAllCharacters() {
    return fetch('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json());
  }
};