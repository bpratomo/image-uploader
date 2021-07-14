import { FC, useState } from "react";
import styles from "./UploadContainer.module.css";
import logo from "../../img/dropicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

export interface UploadContainerProps {
  updateUI: () => void;
}

export const UploadContainer: FC<UploadContainerProps> = ({ updateUI }) => {
  const [isDropZoneVisible, setDropZoneVisible] = useState(false);
  const [enterTarget, setEnterTarget] = useState<EventTarget | null>(null);

  function handleDragEnter(event: React.DragEvent<HTMLDivElement>) {
    setEnterTarget(event.target);
    event.preventDefault();
    event.stopPropagation();

    if (!isDropZoneVisible) {
      setDropZoneVisible(true);
    }
  }

  function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
    if (enterTarget === event.target) {
      event.preventDefault();
      event.stopPropagation();
      if (isDropZoneVisible) {
        setDropZoneVisible(false);
      }
    }
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
    var dt = event.dataTransfer;
    console.log(dt);
    var files = dt.files;
    
    console.log(files.item(0));
    updateUI();
  }

  return (
    <div className={styles.upload_container}>
      <h1>Upload your image</h1>
      <p>File should be Jpeg, png...</p>
      <div
        className={styles.drop_section}
        onDragOver={(evt) => {
          evt.preventDefault();
          evt.stopPropagation();
        }}
        onDragEnter={(evt) => handleDragEnter(evt)}
        onDragLeave={(evt) => handleDragLeave(evt)}
        onDrop={(evt) => handleDrop(evt)}
      >
        {isDropZoneVisible ? (
          <>
            <div className={styles.drop_icon}>
              <FontAwesomeIcon icon={faUpload} />{" "}
            </div>
            <p>Upload image</p>
          </>
        ) : (
          <>
            <img className={styles.placeholder} src={logo} alt="" />
            <p>Drag and drop your image here</p>
          </>
        )}
      </div>
      <p>Or</p>
      <button className={styles.button_filepicker}>Choose a file</button>
    </div>
  );
};
