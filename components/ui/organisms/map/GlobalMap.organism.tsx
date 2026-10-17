"use client";
import { useRef, useEffect } from "react";
import * as mapboxgl from "mapbox-gl/esm";
import "mapbox-gl/dist/mapbox-gl.css";

const GlobalMapOrganism = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    console.log("rendering");
    try {
      mapRef.current = new mapboxgl.Map({
        accessToken: process.env.NEXT_PUBLIC_MAPBOX_API_KEY,

        container: mapContainerRef.current ?? "",
        center: [-71.06776, 42.35816], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 0.8, // starting zoom
        projection: "globe",
      });
    } catch (error) {
      console.log(error);
    }

    return () => {
      if (mapRef.current) mapRef.current.remove();
    };
  });

  return (
    <div
      className="col-span-2"
      id="map-container"
      ref={mapContainerRef}
      style={{
        width: "100%",
        height: "85vh",
        borderRadius: 20,
      }}
    />
  );
};

export default GlobalMapOrganism;
