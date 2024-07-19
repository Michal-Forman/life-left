import React, { useState } from "react";
import Form from "./components/Form";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setIsSubmitted(true);
  };

  return (
    <div className="App">
      {isSubmitted ? (
        <Timer data={formData} />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;
