import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState(`The full name will appear here.`);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleFDChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleUserSubmit = (event) => {
    event.preventDefault();
    setTitle(
      `Are you by any chance ${formData.firstName} ${formData.lastName}?`
    );
    setFormData({ firstName: "", lastName: "" });
  };

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleUserSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleFDChange}
        ></input>
        <label htmlFor="lastName">Last Name: </label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleFDChange}
        ></input>
        <button type="submit">Submit you Name</button>
      </form>
    </>
  );
};
export default App;
