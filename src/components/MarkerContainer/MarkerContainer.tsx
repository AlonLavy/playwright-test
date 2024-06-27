import { useAtomValue } from "jotai";
import { Marker } from "react-leaflet";
import { markerFileAtom } from "../Atoms/MarkersFileAtom";

export const MarkerContainer = () => {
  const markers = useAtomValue(markerFileAtom);
  return (
    <>
      {markers.map((coordinate, index) => (
        <Marker
          key={`${JSON.stringify(coordinate)}, ${index}`}
          position={coordinate}
        />
      ))}
    </>
  );
};
