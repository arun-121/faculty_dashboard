import React, { useState } from "react";

const FormData = () => {
  const [img, setImg] = useState(null);

  const handleForm = async (e) => {
    e.preventDefault();
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="file"
          name=""
          accept="image/*"
          id=""
          onChange={async (e) => {
            const file = e.target.files[0];
            const base64 = await convertToBase64(file);
            console.log(base64);
            setImg(base64);
          }}
        />
        <button type="submit">Convert</button>
      </form>
      {img && <img src={img} alt="Converted to base64" />}
    </>
  );
};

export default FormData;
