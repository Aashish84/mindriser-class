import React from "react";

export default function CategoryInput({ formData, setFormData }) {
  function removeInput(index) {
    setFormData((prev) => {
      let tmp = prev.categories.filter((el, i) => i !== index);
      return {
        ...prev,
        categories: [...tmp],
      };
    });
  }

  function handleChange(e, index) {
    setFormData((prev) => {
      prev.categories[index] = e.target.value;
      return { ...prev };
    });
  }

  return (
    <ul className="list-group">
      {formData.categories.map((el, index) => {
        return (
          <li className="list-group-item" key={index}>
            <input
              type="text"
              value={formData.categories[index]}
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
