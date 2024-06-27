import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MarkerContainer } from "../MarkerContainer/MarkerContainer";

const position = { lat: 32, lng: 34 };

export const Map = () => {
  return (
    <MapContainer
      center={position}
      zoom={6}
      scrollWheelZoom={true}
      style={{ height: 1000, width: 1000 }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <MarkerContainer />
    </MapContainer>
  );
};
