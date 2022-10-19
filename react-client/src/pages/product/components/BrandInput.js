import React from "react";

export default function BrandInput({ formData, setFormData }) {
  function removeInput(index) {
    setFormData((prev) => {
      let tmp = prev.brands.filter((el, i) => i !== index);
      return {
        ...prev,
        brands: [...tmp],
      };
    });
  }

  function handleChange(e, index) {
    setFormData((prev) => {
      prev.brands[index] = e.target.value;
      return { ...prev };
    });
  }

  return (
    <ul className="list-group">
      {formData.brands.map((el, index) => {
        return (
          <li className="list-group-item" key={index}>
            <input
              type="text"
              value={formData.brands[index]}
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
