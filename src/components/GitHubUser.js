import { useState } from "react";
import axios from "axios";

function GitHubUser() {
  const [input, setInput] = useState("");
  const [gitUsers, setGitUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    axios
      .get(`https://api.github.com/search/users?q=${input}`)
      .then(({ data }) => {
        const { items } = data;
        setInput("");
        setGitUsers(items);
      })
      .catch((e) => console.log("err", e));
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log("handleChange ", input);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {gitUsers.length < 1 ? (
        <input
          list="opts"
          name="user"
          value={input}
          onChange={handleChange}
          id="search-user"
        />
      ) : (
        <select
          onChange={handleChange}
          name="user-select"
          id="user-select"
          className="country-select"
        >
          {gitUsers.map((option) => (
            <option key={option.id} value={option.login}>
              {option.login}
            </option>
          ))}
        </select>
      )}
      <input type="submit" value="search" />
    </form>
  );
}

export default GitHubUser;
