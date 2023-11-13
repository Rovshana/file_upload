import React from "react";
import "./App.css";
import FileUpload from "./components/FileUpload";
import { useFormik } from "formik";

function App() {
  const [files, setFiles] = React.useState([]);
  const changeDocHandler = (e) => {
    setFiles([
      ...files.filter((el) => el.name !== e.target.id),
      {
        name: e.target.id,
        files: Array.from(e.target.files),
      },
    ]);
  };
  React.useEffect(() => {
    formik.setFieldValue("allFiles", files);
  }, [files]);
  const formik = useFormik({
    initialValues: {
      documents: null,
      documents2: null,
    },
    onSubmit: (values) => {
      console.log({ values });
      const formData = new FormData();
      const filesName = values?.allFiles;
      // console.log(filesName, "test");
      filesName?.files?.map((item) => {
        console.log(item, "item");
        formData.append(item?.name, item?.name);
      });
      // console.log(formData, "data");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="file-upload-content">
        <FileUpload
          onChange={changeDocHandler}
          name="documents"
          multiple
          className="mb-2"
          files={files}
          setFiles={setFiles}
        />
        <FileUpload
          onChange={changeDocHandler}
          name="documents2"
          multiple
          className="mb-2"
          files={files}
          setFiles={setFiles}
        />
        <button type="submit" className="btn">
          sumbit
        </button>
      </div>
    </form>
  );
}

export default App;
