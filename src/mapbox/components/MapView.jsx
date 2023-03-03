import { useRef, useLayoutEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

import { Loading } from "./Loading";

export const MapView = () => {
  const [map, setMap] = useState(null);
  const mapDiv = useRef(null);

  useLayoutEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZWR6YW0iLCJhIjoiY2xlbnAwb2p1MDZidjNybDEwd2p0cmY3ZiJ9.jDGD_W8NsKO8b9RLi85RIQ";

    const newMap = new mapboxgl.Map({
      container: mapDiv.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [-74.5, 40], // longitud, latitud
      zoom: 9,
    });

    setMap(newMap);

    return () => {
      newMap.remove();
    };
  }, []);

  return (
    <div
      ref={mapDiv}
      style={{
        height: "100vh - 50px",
        marginTop: "50px",
        left: 0,
        position: "fixed",
        top: 0,
        width: "100vw",
      }}
    >
      {!map && <Loading />}
    </div>
  );
};
