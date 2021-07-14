import { FC } from "react";
import styles from "./UploadingBox.module.css";

export interface UploadingBoxProps {
  updateUI: ()=>void;
}

export const UploadingBox: FC<UploadingBoxProps> = () => {
  

  return (
    <div className={styles.upload_container}>
      <h1>Uploading</h1>
      <div className={styles.progress_line}></div>
    </div>
  );
};
