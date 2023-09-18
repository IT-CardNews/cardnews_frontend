import React, { useState } from "react";
import axios from 'axios';

const ImageUploadForm = () => {
  const [imageFile, setImageFile] = useState(null);
  const [jobAddValue, setJobAddValue] = useState("");
  const [jobDateValue, setJobDateValue] = useState("");
  const [jobFieldValue, setJobFieldValue] = useState("");
  const [requirementsValue, setRequirementsValue] = useState("");

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('jobAdd', jobAddValue);
    formData.append('jobDate', jobDateValue);
    formData.append('jobField', jobFieldValue);
    formData.append('requirements', requirementsValue);

    axios.post('https://eatit-backend.azurewebsites.net/job_upload', formData)
      .then(response => {
        // 업로드 성공 처리
      })
      .catch(error => {
        // 업로드 실패 처리
      });
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <input type="text" placeholder="Job Add" onChange={(e) => setJobAddValue(e.target.value)} />
      <input type="text" placeholder="Job Date" onChange={(e) => setJobDateValue(e.target.value)} />
      <input type="text" placeholder="Job Field" onChange={(e) => setJobFieldValue(e.target.value)} />
      <input type="text" placeholder="Requirements" onChange={(e) => setRequirementsValue(e.target.value)} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default ImageUploadForm;
