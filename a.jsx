/** @jsx React.createElement */

import { React, Helmet } from "./deps.js";
import { ExampleContext } from "./context.js";

const A = () => {
  const { message } = React.useContext(ExampleContext)
  return (
    <div>
      <Helmet>
        <title>A</title>
      </Helmet>
      <h2>A</h2>
      <p>{message}</p>
    </div>
  )
};
export default A;
