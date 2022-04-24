/** @jsx React.createElement */

import { React, Helmet } from "./deps.js";
import { ExampleContext } from "./context.js";

const C = () => {
  const { message } = React.useContext(ExampleContext)
  return (
    <div>
      <Helmet>
        <title>C</title>
      </Helmet>
      <h2>C</h2>
      <p>{message}</p>
    </div>
  )
};
export default C;
