import {
  ExampleContext,
  P,
  Ye,
  q,
  w
} from "./chunk-WWQ5XCLN.js";

// deno:file:///home/kyle/Projects/deno/react-helmet-issue/a.jsx
var A = () => {
  const { message } = Ye.useContext(ExampleContext);
  return /* @__PURE__ */ Ye.createElement("div", null, /* @__PURE__ */ Ye.createElement(q, null, /* @__PURE__ */ Ye.createElement("title", null, "A")), /* @__PURE__ */ Ye.createElement("h2", null, "A"), /* @__PURE__ */ Ye.createElement("p", null, message));
};
var a_default = A;

// deno:file:///home/kyle/Projects/deno/react-helmet-issue/b.jsx
var B = () => {
  const { message } = Ye.useContext(ExampleContext);
  return /* @__PURE__ */ Ye.createElement("div", null, /* @__PURE__ */ Ye.createElement(q, null, /* @__PURE__ */ Ye.createElement("title", null, "B")), /* @__PURE__ */ Ye.createElement("h2", null, "B"), /* @__PURE__ */ Ye.createElement("p", null, message));
};
var b_default = B;

// deno:file:///home/kyle/Projects/deno/react-helmet-issue/main.jsx
var C = Ye.lazy(() => import("./c.js"));
var D = Ye.lazy(() => import("./d.js"));
var App = () => {
  const [page, setPage] = Ye.useState("a");
  return /* @__PURE__ */ Ye.createElement("div", {
    id: "app"
  }, /* @__PURE__ */ Ye.createElement(q, {
    defaultTitle: "App",
    titleTemplate: "App - %s"
  }, /* @__PURE__ */ Ye.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ Ye.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  })), /* @__PURE__ */ Ye.createElement("button", {
    onClick: () => setPage("A")
  }, "Switch to A"), /* @__PURE__ */ Ye.createElement("button", {
    onClick: () => setPage("B")
  }, "Switch to B"), /* @__PURE__ */ Ye.createElement("button", {
    onClick: () => setPage("C")
  }, "Switch to C"), /* @__PURE__ */ Ye.createElement("button", {
    onClick: () => setPage("D")
  }, "Switch to D"), /* @__PURE__ */ Ye.createElement(ExampleContext.Provider, {
    value: { message: "not default" }
  }, /* @__PURE__ */ Ye.createElement(Ye.Suspense, {
    fallback: /* @__PURE__ */ Ye.createElement("p", null, "Loading...")
  }, page === "A" ? /* @__PURE__ */ Ye.createElement(a_default, null) : null, page === "B" ? /* @__PURE__ */ Ye.createElement(b_default, null) : null, page === "C" ? /* @__PURE__ */ Ye.createElement(C, null) : null, page === "D" ? /* @__PURE__ */ Ye.createElement(D, null) : null)));
};
var Root = () => /* @__PURE__ */ Ye.createElement(w, null, /* @__PURE__ */ Ye.createElement(App, null));
var container = document.getElementById("root");
var root = P(container);
root.render(/* @__PURE__ */ Ye.createElement(Root, null));
