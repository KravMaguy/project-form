import { useEffect, useState } from "react";
import axios from "axios";
const GitHubList = () => {
  const BaseUrl = "https://api.github.com/repos/";
  const microsoft = "microsoft/TypeScript/issues";
  const facebook = "facebook/react/issues";
  const graphQl = "graphql/graphql-js/issues";
  const [issues, setIssues] = useState({});

  useEffect(() => {
    const Issues = [
      axios.get(`${BaseUrl}${graphQl}`),
      axios.get(`${BaseUrl}${microsoft}`),
      axios.get(`${BaseUrl}${facebook}`),
    ];
    Promise.all([...Issues])
      .then(
        axios.spread((...res) => {
          const graphQLIssues = res[0].data;
          const microsoftIssues = res[1].data;
          const facebookIssues = res[2].data;
          setIssues({ graphQLIssues, microsoftIssues, facebookIssues });
        })
      )
      .catch((error) => {
        console.log("err", error);
      });
  }, []);

  const removeIssue = (id, repo, str) => {
    const filteredRepo = repo.filter((item) => item.id !== id);
    setIssues({ ...issues, [str]: filteredRepo });
  };

  const { graphQLIssues, microsoftIssues, facebookIssues } = issues;
  return (
    <>
      <h2>{microsoft}</h2>
      <div>
        {microsoftIssues && microsoftIssues.length > 0
          ? microsoftIssues.map((x) => {
              return (
                <div className="item" key={x.id}>
                  <h4>{x.title}</h4>
                  <button
                    onClick={() =>
                      removeIssue(x.id, microsoftIssues, "microsoftIssues")
                    }
                  >
                    remove
                  </button>
                </div>
              );
            })
          : `loading ${microsoft}`}
      </div>
      <h2>{facebook}</h2>
      <div>
        {facebookIssues && facebookIssues.length > 0
          ? facebookIssues.map((x) => {
              return (
                <div className="item" key={x.id}>
                  <h4>{x.title}</h4>
                  <button
                    onClick={() =>
                      removeIssue(x.id, facebookIssues, "facebookIssues")
                    }
                  >
                    remove
                  </button>
                </div>
              );
            })
          : `loading ${facebook}`}
      </div>
      <h2>{graphQl}</h2>
      <div>
        {graphQLIssues && graphQLIssues.length > 0
          ? graphQLIssues.map((x) => {
              return (
                <div className="item" key={x.id}>
                  <h4>{x.title}</h4>
                  <button
                    onClick={() =>
                      removeIssue(x.id, graphQLIssues, "graphQLIssues")
                    }
                  >
                    remove
                  </button>
                </div>
              );
            })
          : `loading ${graphQl}`}
      </div>
    </>
  );
};

export default GitHubList;
