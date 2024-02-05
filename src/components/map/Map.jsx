import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import MapPanel from "../panelMap/MapPanel";

import "./map.scss";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const start = { lng: 28.6656, lat: 48.8536 }; //Координаты начальные. Если надо узнать - "https://yandex.ru/map-constructor/location-tool/?coordorder=longlat&ysclid=ls6626uqrj498101680"
  const [zoom] = useState(4); // Уровень начального приближения

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: `${process.env.REACT_APP_API_MAP}`,
      center: [start.lng, start.lat],
      zoom: zoom,
    });
  }, [start.lng, start.lat, zoom]);

  return (
    <div className="container m-centr map">
      <div className="map__panel">
       
        <MapPanel/>
        <div className="panel__wrapper">
          <div className="map-wrap">
            <div ref={mapContainer} className="map__content" />
          </div>
        </div>
      </div>
    </div>
  );
}
