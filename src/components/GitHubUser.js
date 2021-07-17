import { useState } from "react";
import axios from "axios";

function GitHubUser() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    axios.get(`https://api.github.com/users/${input}`).then(({ data }) => {
      console.log("data", data);
      setInput("");
    });
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="button-in">
        <input value={input} onChange={handleChange} type="text" />
        <button type="submit" value="submit">
          Search{" "}
        </button>
      </div>
    </form>
  );
}

export default GitHubUser;
