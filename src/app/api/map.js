// Функция получения автомобильного маршрута с 2 точками
// startPos - начальная координата
// secPos - координата окончания маршрута
export const getDriveRoute = async (startPos, secPos) => {
  const response = await fetch(
    `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${process.env.REACT_APP_API_OPENSERVICE}&start=${startPos[1]},${startPos[0]}&end=${secPos[1]},${secPos[0]}`
  );

  const data = await response.json();
  return data;
};

// Функция для получения путей, которые проходят еще через несколько точек (хз робит или нет)
export const getDriveRouteMulti = async (startPos, secPos, multi) => {
  const response = await fetch(
    `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${process.env.REACT_APP_API_OPENSERVICE}&start=37.5890232951609,55.66043047881329&end=37.59986256877833,55.65810304578989&waypoints=37.60771145511527,55.65904663009016`
  );

  const data = await response.json();
  return data;
};

export const handleCallback = async (el) => {

  console.log(el);
  return el;
}


