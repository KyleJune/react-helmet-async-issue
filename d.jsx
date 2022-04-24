/** @jsx React.createElement */

import { React, Helmet } from "./deps.js";
import { ExampleContext } from "./context.js";

const D = () => {
  const { message } = React.useContext(ExampleContext)
  return (
    <div>
      <Helmet>
        <title>D</title>
      </Helmet>
      <h2>D</h2>
      <p>{message}</p>
    </div>
  )
};
export default D;
