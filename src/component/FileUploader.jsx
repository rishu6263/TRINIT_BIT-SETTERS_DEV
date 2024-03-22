import React, { useState } from 'react';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log(selectedFile);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Upload File</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4"
      />
      {selectedFile && (
        <div className="mb-4">
          <p className="font-semibold">Selected File:</p>
          <p>{selectedFile.name}</p>
        </div>
      )}
      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUploader;
