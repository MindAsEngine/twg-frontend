import React, { Component } from "react";
import * as maptilersdk from "maplibre-gl";
import MapPanel from "../panelMap/MapPanel";

import "./map.scss";

import { getDriveRoute } from "../../app/api/map";

class MapsWithSideBar extends Component {
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
      style: process.env.REACT_APP_API_MAP2,
      center: [-9.034818, 41.880571],
      zoom: 4,
      dragRotate: false,
    });

    await getDriveRoute(
      [50.09102770452696, 6.201657959853016],
      [49.583389164900495, 13.17190424631698]
    );

    this.map.on("load", () => {});
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
            <div ref={this.mapContainer} className="map__content" />
          </div>
        </div>
      </div>
    );
  }
}

export default MapsWithSideBar;
