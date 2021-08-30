import React from "react";
import { Button, withStyles } from "@material-ui/core";
import { Link, graphql, useStaticQuery } from "gatsby";

export default function App() {
  const { gcms } = useStaticQuery(graphql`
    {
      gcms {
        sections {
          title
          url
        }
      }
    }
  `);

  console.log(gcms);
  
  let { title, url } = gcms.sections[0];

  const StyledButton = withStyles({
    root: {
      backgroundColor: "#4444ee",
      padding: "1rem 2rem",
    },
  })(Button);
  return (
    <div>
      <StyledButton>
        <Link to='/components/navbar/Button'>to button</Link>
      </StyledButton>
      <h1>
        {title}
        {url}
      </h1>
    </div>
  );
}
