import { Map } from "./components/Map/Map";
import "./App.css";
import { FileUploader } from "./FileUploader/FileUploader";
import { MultipleTextField } from "./components/MultipleTextField/MultipleTextField";

export const App = () => {
  return (
    <>
      <Map />
      <MultipleTextField />
      <FileUploader />
    </>
  );
};
