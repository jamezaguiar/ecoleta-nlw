import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

import "./styles.css";

interface Properties {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Properties> = ({ onFileUploaded }) => {
  const [selectedImageURL, setSelectedImageURL] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileURL = URL.createObjectURL(file);

      setSelectedImageURL(fileURL);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectedImageURL ? (
        <img src={selectedImageURL} alt="Imagem do ponto de coleta" />
      ) : isDragActive ? (
        <p>
          <FiUpload />
          Solte o arquivo
        </p>
      ) : (
        <p>
          <FiUpload />
          Arraste ou clique para adicionar a imagem do seu ponto de coleta
        </p>
      )}
    </div>
  );
};
export default Dropzone;
