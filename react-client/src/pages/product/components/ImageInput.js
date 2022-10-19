import React from "react";

export default function ImageInput({ formData, setFormData }) {
  function removeInput(index) {
    setFormData((prev) => {
      let tmp = prev.images.filter((el, i) => i !== index);
      return {
        ...prev,
        images: [...tmp],
      };
    });
  }

  function handleChange(e, index) {
    setFormData((prev) => {
      prev.images[index] = e.target.value;
      return { ...prev };
    });
  }

  return (
    <ul className="list-group">
      {formData.images.map((el, index) => {
        return (
          <li className="list-group-item" key={index}>
            <input
              type="file"
              value={formData.images[index]}
              onChange={(e) => handleChange(e, index)}
            />
            <button type="button" onClick={() => removeInput(index)}>
              remove
            </button>
          </li>
        );
      })}
    </ul>
  );
}
