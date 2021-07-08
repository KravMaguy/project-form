import { useEffect, useState } from "react";
import axios from "axios";
const GitHubList = () => {
  const BaseUrl = "https://api.github.com/repos/";
  const microsoft = "microsoft/TypeScript/issues";
  const facebook = "facebook/react/issues";
  const graphQl = "graphql/graphql-js/issues";
  const [microsoftissues, setMicrosoftIssues] = useState([]);
  const [facebookissues, setFacebookIssues] = useState([]);
  const [graphqlissues, setGraphQLissues] = useState([]);

  const [microsoftReady, setMicrosoftReady] = useState(false);
  const [facebookReady, setFacebookReady] = useState(false);
  const [graphQlReady, setGraphQlReady] = useState(false);

  useEffect(() => {
    const repo3 = axios.get(`${BaseUrl}${graphQl}`);
    const repo1 = axios.get(`${BaseUrl}${microsoft}`);
    const repo2 = axios.get(`${BaseUrl}${facebook}`);
    Promise.all([repo1, repo2, repo3])
      .then(
        axios.spread(function (res1, res2, res3) {
          const res1data = res1.data;
          const res2data = res2.data;
          const res3data = res3.data;
          setMicrosoftIssues(res1data);
          setFacebookIssues(res2data);
          setGraphQLissues(res3data);
          setMicrosoftReady(true);
          setFacebookReady(true);
          setGraphQlReady(true);
        })
      )
      .catch((error) => {
        console.log("err", error);
      });
  }, []);

  const removeIssue = (id, string) => {
    let stateLocation;
    string === "microsoft"
      ? (stateLocation = microsoftissues)
      : string === "facebook"
      ? (stateLocation = facebookissues)
      : (stateLocation = graphqlissues);
    const newList = stateLocation.filter((item) => item.id !== id);
    return string === "microsoft"
      ? setMicrosoftIssues(newList)
      : string === "facebook"
      ? setFacebookIssues(newList)
      : setGraphQLissues(newList);
  };

  return (
    <>
      <h2 style={{ maxWidth: "100vw" }}>{microsoft}</h2>
      <div>
        {microsoftReady
          ? microsoftissues.map((x) => {
              return (
                <div className="item" key={x.id}>
                  <h4>{x.title}</h4>
                  <button onClick={() => removeIssue(x.id, "microsoft")}>
                    remove
                  </button>
                </div>
              );
            })
          : "loading microsoft issues"}
      </div>
      <h2>{facebook}</h2>
      <div>
        {facebookReady
          ? facebookissues.map((x) => {
              return (
                <div className="item" key={x.id}>
                  <h4>{x.title}</h4>
                  <button onClick={() => removeIssue(x.id, "facebook")}>
                    remove
                  </button>
                </div>
              );
            })
          : "loading facebook issues"}
      </div>
      <h2>{graphQl}</h2>
      <div>
        {graphQlReady
          ? graphqlissues.map((x) => {
              return (
                <div className="item" key={x.id}>
                  <h4>{x.title}</h4>
                  <button onClick={() => removeIssue(x.id, "graphQl")}>
                    remove
                  </button>
                </div>
              );
            })
          : "loading graphQl issues"}
      </div>
    </>
  );
};

export default GitHubList;
