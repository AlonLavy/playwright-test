import { useAtomValue } from "jotai";
import { Marker, Popup } from "react-leaflet";
import { markerFileAtom } from "../Atoms/MarkersFileAtom";

export const MarkerContainer = () => {
  const markers = useAtomValue(markerFileAtom);
  return (
    <>
      {markers.map((coordinate, index) => (
        <Marker
          key={`${JSON.stringify(coordinate)}, ${index}`}
          alt={`marker${index}`}
          position={coordinate}
        >
          <Popup>
            <p>
              Marker Located at: {coordinate.lat}, {coordinate.lng}
            </p>
          </Popup>
        </Marker>
      ))}
    </>
  );
};
