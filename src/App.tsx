import React, { useState } from "react";
import "./App.css";
import { UploadContainer } from "./components/UploadContainer/UploadContainer";
import { UploadingBox } from "./components/UploadingBox/UploadingBox";
import { UploadedContainer } from "./components/UploadedContainer/UploadedContainer";

enum UploadStatuses {
  initial,
  uploading,
  uploaded,
}

function App() {
  const [uploadStatus, setUploadStatus] = useState<UploadStatuses>(
    UploadStatuses.initial
  );

  function setUploadingStatus(){
    setUploadStatus(UploadStatuses.uploading)
  }

  function setUploadedStatus(){
    setUploadStatus(UploadStatuses.uploaded)
  }


  return (
    <div className="App">
      <header className="container">
        {uploadStatus === UploadStatuses.initial && <UploadContainer updateUI={setUploadingStatus} />}
        {uploadStatus === UploadStatuses.uploading && <UploadingBox updateUI={setUploadedStatus}/>}
        {uploadStatus === UploadStatuses.uploaded && <UploadedContainer />}
      </header>
    </div>
  );
}

export default App;
