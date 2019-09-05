export const getTemperatures = temperatures => {
  return fetch('https://derin-temperature-app.herokuapp.com/weather/temperatures/all')
    .then(res =>([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to get temperatures';
      return json;
    })
    .then(json => {
      return json;
    });
};

export const postTemperature = temperature => {
  return fetch('https://derin-temperature-app.herokuapp.com/weather/temperatures/all', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(temperature)
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to get temperature';
      return json;
    });
};

export const removeTemperature = id => {
  return fetch(`https://derin-temperature-app.herokuapp.com/weather/temperatures/all/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to delete temperature';
      return json;
    });
};

export const getLocations = locations => {
  return fetch('https://derin-temperature-app.herokuapp.com/weather/temperatures/all')
    .then(res =>([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to get locations';
      return json;
    })
    .then(json => {
      return json;
    });
};

export const postLocation = location => {
  return fetch('https://derin-temperature-app.herokuapp.com/weather/temperatures/all', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(location)
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to get location';
      return json;
    });
};

export const removeLocation = id => {
  return fetch(`https://derin-temperature-app.herokuapp.com/weather/temperatures/all/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to delete location';
      return json;
    });
};
