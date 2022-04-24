/** @jsx React.createElement */

import { React, createRoot, Helmet, HelmetProvider } from "./deps.js";
import { ExampleContext } from "./context.js";
import A from "./a.jsx";
import B from "./b.jsx";
// import C from "./c.jsx";
// import D from "./d.jsx";

const C = React.lazy(() => import("./c.jsx"));
const D = React.lazy(() => import("./d.jsx"));

const App = () => {
  const [ page, setPage ] = React.useState("a");
  return (
    <div id="app">
      <Helmet defaultTitle="App" titleTemplate="App - %s">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <button onClick={() => setPage("A")}>Switch to A</button>
      <button onClick={() => setPage("B")}>Switch to B</button>
      <button onClick={() => setPage("C")}>Switch to C</button>
      <button onClick={() => setPage("D")}>Switch to D</button>
      <ExampleContext.Provider value={{ message: "not default" }}>
        <React.Suspense fallback={<p>Loading...</p>}>
          { page === "A" ? <A /> : null }
          { page === "B" ? <B /> : null }
          { page === "C" ? <C /> : null }
        </React.Suspense>
        <React.Suspense fallback={<p>Loading...</p>}>
          { page === "D" ? <D /> : null }
        </React.Suspense>
      </ExampleContext.Provider>
    </div>
  );
}

const Root = () => (
  <HelmetProvider>
    <App />
  </HelmetProvider>
)

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Root />)
