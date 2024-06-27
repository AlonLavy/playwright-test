import { atom } from "jotai";
import { LatLng } from "leaflet";

export const markerFileAtom = atom<Array<LatLng>>([]);
