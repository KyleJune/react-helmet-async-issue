/** @jsx React.createElement */

import { React, Helmet } from "./deps.js";
import { ExampleContext } from "./context.js";

const B = () => {
  const { message } = React.useContext(ExampleContext)
  return (
    <div>
      <Helmet>
        <title>B</title>
      </Helmet>
      <h2>B</h2>
      <p>{message}</p>
    </div>
  )
};
export default B;
