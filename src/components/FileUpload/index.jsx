import React from "react";
import "./upload.scss";
const FileUpload = ({ name, onChange, multiple, files, setFiles }) => {
  const foundArray = files?.find((el) => el.name === name)?.files;
  const handleDelete = (itemName) => {
    const updatedFiles = files.map((file) => {
      if (file.name === name) {
        const updatedFileArray = file.files.filter(
          (item) => item.name !== itemName
        );
        return { ...file, files: updatedFileArray };
      }
      return file;
    });

    setFiles(updatedFiles);
  };

  return (
    <div className="file-upload">
      <input
        onChange={onChange}
        multiple={multiple}
        type="file"
        className="w-100 custom-upload d-none"
        id={name}
      />
      <label
        htmlFor={name}
        className="d-flex justify-content-end custom-upload__container mb-1 cursor-pointer"
      >
        <div className="custom-upload__container--inner">Upload Files </div>
      </label>
      {foundArray?.map((item) => {
        return (
          <div className="item-name" key={item?.name}>
            {item?.name}
            <span
              onClick={() => handleDelete(item?.name)}
              className="item-delete"
            >
              X
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FileUpload;
