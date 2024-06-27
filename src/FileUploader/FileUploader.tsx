import Dropzone from "react-dropzone";
import "./FileUploader.css";
import { useSetAtom } from "jotai";
import { markerFileAtom } from "../components/Atoms/MarkersFileAtom";

export const FileUploader = () => {
  const setMarkers = useSetAtom(markerFileAtom);
  return (
    <Dropzone
      onDrop={(acceptedFiles: Array<File>) => {
        acceptedFiles.forEach((file) => {
          const fileReader = new FileReader();
          fileReader.readAsText(file);
          fileReader.addEventListener("loadend", (event) => {
            setMarkers(JSON.parse(event.target?.result as string)["markers"]);
          });
        });
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} className="fileUploader" />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};
