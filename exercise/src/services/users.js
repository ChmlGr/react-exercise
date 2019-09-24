const url = 'https://randomuser.me/api/';
const getUsers = count => {
  // Only including the needed fields results in a 500 Error
  return fetch(`${url}?results=${count}&seed=exercise`)
    .then(res => res.json())
    .then(data => data.results)
};

export { getUsers };
