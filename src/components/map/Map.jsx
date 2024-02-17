import React, { Component } from "react";
import * as maptilersdk from "@maptiler/sdk";
import MapPanel from "../panelMap/MapPanel";
import axios from "axios";

import { Spain } from "./mapex";

import "./map.scss";

import { getDriveRoute, getDriveRouteMulti } from "../../app/api/map";

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
  };
  async componentDidMount() {
    this.map = new maptilersdk.Map({
      container: this.mapContainer.current,
      style: process.env.REACT_APP_API_MAP,
      center: [-9.034818, 41.880571],
      zoom: 4,
      dragRotate: false,
    });

    const routeData = await getDriveRoute(
      [50.09102770452696, 6.201657959853016],
      [49.583389164900495, 13.17190424631698]
    );
    const routeCoordinates = routeData.features[0].geometry.coordinates;
    this.setState({ getRoutes: [...this.state.getRoutes, routeCoordinates] });

    // const routeData1 = await getDriveRoute(
    //   [52.09102770452696, 9.201657959853016],
    //   [42.583389164900495, 10.17190424631698]
    // );
    // const routeCoordinates1 = routeData1.features[0].geometry.coordinates;
    // console.log(routeCoordinates1);

    // this.setState({ getRoutes: [...this.state.getRoutes, routeCoordinates1] });

    // const routeData2 = await getDriveRoute(
    //   [42.09102770452696, 7.201657959853016],
    //   [41.583389164900495, 12.17190424631698]
    // );
    // const routeCoordinates2 = routeData2.features[0].geometry.coordinates;
    // this.setState({ getRoutes: [...this.state.getRoutes, routeCoordinates2] });
    this.map.on("load", () => {
      this.map.addLayer({
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

      for (let i = 0; i < this.state.getRoutes.length; i++) {
        const el = this.state.getRoutes[i];
      }
    });
  }


  // Хуита для запроса на route для того чтобы не было ошибок
  // handleAddRoute = (el) => {
  //   setTimeout(async () => {
  //     const routeData = await getDriveRoute(
  //       [50.09102770452696, 6.201657959853016],
  //       [49.583389164900495, 13.17190424631698]
  //     );
  //     const routeCoordinates = routeData.features[0].geometry.coordinates;
  //     this.setState({ getRoutes: [...this.state.getRoutes, routeCoordinates] });
  //   }, 500);
  //   console.log(this.state.getRoutes);
  // };
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
          <div className="panel__wrapper">
            <div className="map-wrap">
              <div ref={this.mapContainer} className="map__content" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
