import { Map, View } from "ol";
import Attribution from 'ol/control/Attribution';
import Tile from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';
import React, { useEffect, useRef } from "react";
import './index.css';


function POIEditor() {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = new Map({
      target: 'map',
      layers: [
        new Tile({
          source: new OSM()
        }),
        new Tile({
          source: new XYZ({
            attributions: [
              OSM.ATTRIBUTION,
              new Attribution({
                html: 'Style: <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA 2.0</a> <a href="http://www.openrailwaymap.org/">OpenRailwayMap</a> and OpenStreetMap',
              }),
            ],
            url: 'http://{a-c}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png',
            crossOrigin: null, //make it work inside canvas
            tilePixelRatio: 2, //server returns 512px img for 256 tiles
            maxZoom: 19, // XYZ's default is 18
            opaque: true,
          })
        })
      ],
      view: new View({
        center: fromLonLat([37.41, 8.82]),
        zoom: 4,
      })
    })

  }, []);

  return (
    <div id="map" className="POIEditor">
    </div>
  );
}

export default POIEditor;
