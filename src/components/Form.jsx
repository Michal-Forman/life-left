import React, { useState } from "react";

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    lifeExpectancy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Field 1:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Field 2:
          <input
            type="number"
            name="lifeExpectancy"
            value={formData.lifeExpectancy}
            onChange={handleChange}
            placeholder="e.g. 78"
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
