/* import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MapState } from "./MapProvider";
//@ts-ignore
import { Map, Marker } from "!mapbox-gl";

const initialState = {
  isMapReady: false,
  map: null,
  markers: [],
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMap: (state, { payload }) => {
      state.isMapReady = true;
      state.map = payload;
    },
    setMarkers: (state, { payload }) => {
      state.markers = payload;
    },
  },
});

export const { setMap, setMarkers } = mapSlice.actions;
 */
import { createSlice } from "@reduxjs/toolkit";

export const mapboxSlice = createSlice({
  name: "mapbox",
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = mapboxSlice.actions;
