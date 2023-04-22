import React from "react";

export const Contact = () => {
  return (
    <div className="container">
      <h1>Get in Touch</h1>
      <table style={{ margin: "0 auto", borderCollapse: "collapse" }}>
        <tr>
          <td class="heading">Name</td>
          <td>Chirag Chakraborty</td>
        </tr>
        <tr>
          <td class="heading">Email</td>
          <td>chiragchakraborty48@gmail.com</td>
        </tr>
        <tr>
          <td class="heading">Code</td>
          <td>
            <a
              href="https://github.com/noobchirag69/React_Movie_Search"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
};
