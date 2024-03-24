import React, { Component } from "react";
import * as maptilersdk from "maplibre-gl";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { TagsAsideMap } from "../tags/TagsAsideMap";
import "./map.scss";

import { addCluster, getDriveRoute } from "../../app/api/map";
import DropUp from "../filtrs/DropUp";
import ExtenLeft from "../filtrs/ExtenLeft";
import AsideMap from "../asideMap/AsideMap";

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
    aside: false,
  };
  componentDidMount() {
    this.map = new maptilersdk.Map({
      container: this.mapContainer.current,
      style: process.env.REACT_APP_API_MAP2,
      center: [-9.034818, 41.880571],
      zoom: 4,
      dragRotate: false,
    });

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
            coordinates: [-2.558681827825276, 40.590918356848924, 0],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "ak16994523",
            mag: 2.3,
            time: 1507425650893,
            felt: null,
            tsunami: 0,
          },
          geometry: {
            type: "Point",
            coordinates: [-3.6052439105677414, 40.158532164852545, 0],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "ak16994523",
            mag: 2.3,
            time: 1507425650893,
            felt: null,
            tsunami: 0,
          },
          geometry: {
            type: "Point",
            coordinates: [-5.15522351682426, 40.053081074538305, 0],
          },
        },
      ],
    };

    this.map.loadImage(
      "https://i.postimg.cc/KjdXGTLD/pointew.png",
      (error, image) => {
        if (error) throw error;
        this.map.addImage("point", image);
      }
    );
    this.map.on("load", () => {
      const waiting = () => {
        if (this.map.isStyleLoaded() == false) {
          setTimeout(waiting, 200);
        } else {
          addCluster(this.map, "hotels", "point", data);
        }
      };
      waiting();
    });

    var el = document.createElement("div");
    el.id = "marker";

    //unclustered-point - название layer point
    this.map.on("click", "unclustered-point", (e) => {
      this.setState({ aside: true });
      //Тут я получаю значение id
      console.log(e.features[0]._vectorTileFeature.properties.id);
    });
  }
  handleCallback = (el) => {
    this.setState({ aside: el });
  };

  componentWillUnmount() {
    this.map.remove();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.getRoutes !== prevState.getRoutes) {
    }
  }

  render() {
    return (
      <div className="container m-centr map map__optional">
        <div className="map__panel flex">
          <div className="map-wrap">
            <AsideMap asideShow={this.state.aside} />
            <DropUp right={true} />
            <ExtenLeft right={true} />
            <div ref={this.mapContainer} className="map__content" />
          </div>
        </div>
      </div>
    );
  }
}

export default MapsWithSideBar;
