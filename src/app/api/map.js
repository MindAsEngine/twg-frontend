// Функция получения автомобильного маршрута с 2 точками
// startPos - начальная координата
// secPos - координата окончания маршрута
export const getDriveRoute = async (startPos, secPos, updateStateFunc) => {
  try {
    const response = await fetch(
      `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${process.env.REACT_APP_API_OPENSERVICE}&start=${startPos[1]},${startPos[0]}&end=${secPos[1]},${secPos[0]}`
    );
    const data = await response.json();

    if (data) {
      // Выполняем действия с полученными данными
      const routeCoordinates = data.features[0].geometry.coordinates;
      updateStateFunc(routeCoordinates);
    } else {
      return false;
    }
  } catch (error) {
    console.error("Ошибка запроса:", error);
  }
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
  return el;
};

//Функция добавления путей
export function addRouteLayer(map, routeCoordinates, color) {
  map.addLayer({
    id: "route",
    type: "line",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: routeCoordinates,
        },
      },
    },
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#ffd435",
      "line-width": 4,
    },
  });
}


//Функция добавления стиля для страны
export function addCountryLayer(map, countryGeo) {
  map.addLayer({
    id: "country-1",
    type: "fill",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: countryGeo,
        },
      },
    },
    paint: {
      "fill-color": "#ff0000",
      "fill-opacity": 0.5,
    },
  });
}

//Функция добавления маркера на карту
//Параметры: map - карта на которую добавляются маркеры,
function createCustomMarker(map, PointMap, maptiller, pos) {
  const imgElement = new Image();
  imgElement.src = PointMap;
  imgElement.alt = "";

  const marker = new maptiller.Marker({
    element: imgElement,
  })
    .setLngLat([pos[1], pos[0]])
    .addTo(map);

  return marker;
}

export default createCustomMarker;




//Добавление кластера
export function addCluster(map, clusterName, pointMap, data) {
  
  map.addSource(`${clusterName}`, {
    type: "geojson",
    data: data,
    cluster: true,
    clusterMaxZoom: 14,
    clusterRadius: 30,
  });

  map.addLayer({
    id: "clusters",
    type: "circle",
    source: `${clusterName}`,
    filter: ["has", "point_count"],
    paint: {
      "circle-color": [
        "step",
        ["get", "point_count"],
        "#FF3D33",
        100,
        "#FF3D33",
        750,
        "#FF3D33",
      ],
      "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
    },
  });

  map.addLayer({
    id: "cluster-count",
    type: "symbol",
    source: clusterName,
    filter: ["has", "point_count"],
    layout: {
      "text-field": "{point_count_abbreviated}",
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      "text-size": 16,
    },
    paint: {
      "text-color": "rgba(255, 255, 255, 1)",
    },
  });

  map.addLayer({
    id: "unclustered-point",
    type: "symbol",
    source: `${clusterName}`,
    filter: ["!", ["has", "point_count"]],
    layout: {
      "icon-image": pointMap,
    },
  });
}
