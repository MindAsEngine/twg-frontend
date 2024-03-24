import React, { Component } from "react";
import * as maptilersdk from "maplibre-gl";
import MapPanel from "../panelMap/MapPanel";
import "@maptiler/sdk/dist/maptiler-sdk.css";

import "./map.scss";
import PointMap from "../../img/pointMap.svg";

import createCustomMarker, {
  addCluster,
  addCountryLayer,
  addRouteLayer,
  getDriveRoute,
} from "../../app/api/map";
import DropUp from "../filtrs/DropUp";
import ExtenLeft from "../filtrs/ExtenLeft";
import MapTurs from "./mapturs/MapTurs";

import { Spain } from "./mapex";

class Map extends Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
    this.map = null;
    this.start = { lng: 28.6656, lat: 48.8536 };
    this.end = { lng: 30.3159, lat: 59.9399 };
  }
  state = {
    panelShow: "turism",
    loading: false,
    getRoutes: [],
    klasterMarkers: [],
  };

  setPoints = (newPoints) => {
    this.setState({ points: newPoints });
  };

  //Функция для обновления state
  updateState = (newData) => {
    this.setState({
      getRoutes: newData,
    });
  };

  componentDidMount() {
    this.map = new maptilersdk.Map({
      container: this.mapContainer.current,
      style: process.env.REACT_APP_API_MAP,
      center: [-9.034818, 41.880571],
      zoom: 4,
      dragRotate: false,
    });

    const imgElement = new Image();
    imgElement.src = PointMap;
    imgElement.alt = "";

    const data = {
      type: "FeatureCollection",
      crs: {
        type: "name",
        properties: {
          name: "urn:ogc:def:crs:OGC:1.3:CRS84",
        },
      },
      features: [
        {
          type: "Feature",
          properties: {
            id: "ak16994521",
            mag: 2.3,
            time: 1507425650893,
            felt: null,
            tsunami: 0,
          },
          geometry: {
            type: "Point",
            coordinates: [-151.5129, 63.1016, 0],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "ak16994519",
            mag: 1.7,
            time: 1507425289659,
            felt: null,
            tsunami: 0,
          },
          geometry: {
            type: "Point",
            coordinates: [-150.4048, 63.1224, 105.5],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "ak16994519",
            mag: 1.7,
            time: 1507425289659,
            felt: null,
            tsunami: 0,
          },
          geometry: {
            type: "Point",
            coordinates: [-15.4048, 63.1224, 105.5],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "ak16994517",
            mag: 1.6,
            time: 1507424832518,
            felt: null,
            tsunami: 0,
          },
          geometry: {
            type: "Point",
            coordinates: [-151.3597, 63.0781, 0],
          },
        },
      ],
    };

    const images = [{ imageUrl: "../../img/point.PNG", id: "cat" }];

    getDriveRoute(
      [50.09102770452696, 6.201657959853016],
      [49.583389164900495, 13.17190424631698],
      this.updateState
    );

    this.map.loadImage(
      "https://i.postimg.cc/KjdXGTLD/pointew.png",
      (error, image) => {
        if (error) throw error;
        this.map.addImage("cat", image);
      }
    );

    this.map.on("load", () => {
      const waiting = () => {
        if (this.map.isStyleLoaded() == false) {
          setTimeout(waiting, 200);
        } else {
          addCluster(this.map, "hotels", "cat", data);
          // Добавление стиля для страны
          addCountryLayer(this.map, Spain);
        }
      };
      waiting();
      this.map.on("click", (e) => {
        const { lng, lat } = e.lngLat;
      });
    });
  }

  //Тут логика заключается в том, что в случае обновления state заново обновляется слой
  componentDidUpdate(prevProps, prevState) {
    if (this.state.getRoutes !== prevState.getRoutes) {
      addRouteLayer(this.map, this.state.getRoutes);
    }
  }

  handleCallback = (el) => {
    this.setState({ panelShow: el });
  };

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div className="container m-centr map">
        <div className="map__panel">
          <MapPanel handleCallback={this.handleCallback} />
          <div className="map-wrap">
            <DropUp />
            <ExtenLeft />
            <div ref={this.mapContainer} className="map__content"></div>
          </div>
        </div>
        <MapTurs />
      </div>
    );
  }
}

export default Map;
