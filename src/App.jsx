import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState(`The full name will appear here.`);

  const [firstName, setFirstName] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  return (
    <>
      <h2>{title}</h2>
      <label htmlFor="firstName">First Name: </label>
      <form
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={handleFirstNameChange}
      ></form>
    </>
  );
};
export default App;
