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
var C = Ye.lazy(() => import("./c-DJHNMXHY.js"));
var D = Ye.lazy(() => import("./d-AEMBBGAW.js"));
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
  }, page === "A" ? /* @__PURE__ */ Ye.createElement(a_default, null) : null, page === "B" ? /* @__PURE__ */ Ye.createElement(b_default, null) : null, page === "C" ? /* @__PURE__ */ Ye.createElement(C, null) : null), /* @__PURE__ */ Ye.createElement(Ye.Suspense, {
    fallback: /* @__PURE__ */ Ye.createElement("p", null, "Loading...")
  }, page === "D" ? /* @__PURE__ */ Ye.createElement(D, null) : null)));
};
var Root = () => /* @__PURE__ */ Ye.createElement(w, null, /* @__PURE__ */ Ye.createElement(App, null));
var container = document.getElementById("root");
var root = P(container);
root.render(/* @__PURE__ */ Ye.createElement(Root, null));
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZGVubzpmaWxlOi8vL2hvbWUva3lsZS9Qcm9qZWN0cy9kZW5vL3JlYWN0LWhlbG1ldC1pc3N1ZS9hLmpzeCIsICJkZW5vOmZpbGU6Ly8vaG9tZS9reWxlL1Byb2plY3RzL2Rlbm8vcmVhY3QtaGVsbWV0LWlzc3VlL2IuanN4IiwgImRlbm86ZmlsZTovLy9ob21lL2t5bGUvUHJvamVjdHMvZGVuby9yZWFjdC1oZWxtZXQtaXNzdWUvbWFpbi5qc3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKiBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgKi9cblxuaW1wb3J0IHsgUmVhY3QsIEhlbG1ldCB9IGZyb20gXCIuL2RlcHMuanNcIjtcbmltcG9ydCB7IEV4YW1wbGVDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dC5qc1wiO1xuXG5jb25zdCBBID0gKCkgPT4ge1xuICBjb25zdCB7IG1lc3NhZ2UgfSA9IFJlYWN0LnVzZUNvbnRleHQoRXhhbXBsZUNvbnRleHQpXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT5BPC90aXRsZT5cbiAgICAgIDwvSGVsbWV0PlxuICAgICAgPGgyPkE8L2gyPlxuICAgICAgPHA+e21lc3NhZ2V9PC9wPlxuICAgIDwvZGl2PlxuICApXG59O1xuZXhwb3J0IGRlZmF1bHQgQTtcbiIsICIvKiogQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50ICovXG5cbmltcG9ydCB7IFJlYWN0LCBIZWxtZXQgfSBmcm9tIFwiLi9kZXBzLmpzXCI7XG5pbXBvcnQgeyBFeGFtcGxlQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHQuanNcIjtcblxuY29uc3QgQiA9ICgpID0+IHtcbiAgY29uc3QgeyBtZXNzYWdlIH0gPSBSZWFjdC51c2VDb250ZXh0KEV4YW1wbGVDb250ZXh0KVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8dGl0bGU+QjwvdGl0bGU+XG4gICAgICA8L0hlbG1ldD5cbiAgICAgIDxoMj5CPC9oMj5cbiAgICAgIDxwPnttZXNzYWdlfTwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufTtcbmV4cG9ydCBkZWZhdWx0IEI7XG4iLCAiLyoqIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCAqL1xuXG5pbXBvcnQgeyBSZWFjdCwgY3JlYXRlUm9vdCwgSGVsbWV0LCBIZWxtZXRQcm92aWRlciB9IGZyb20gXCIuL2RlcHMuanNcIjtcbmltcG9ydCB7IEV4YW1wbGVDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dC5qc1wiO1xuaW1wb3J0IEEgZnJvbSBcIi4vYS5qc3hcIjtcbmltcG9ydCBCIGZyb20gXCIuL2IuanN4XCI7XG4vLyBpbXBvcnQgQyBmcm9tIFwiLi9jLmpzeFwiO1xuLy8gaW1wb3J0IEQgZnJvbSBcIi4vZC5qc3hcIjtcblxuY29uc3QgQyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jLmpzeFwiKSk7XG5jb25zdCBEID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2QuanN4XCIpKTtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbIHBhZ2UsIHNldFBhZ2UgXSA9IFJlYWN0LnVzZVN0YXRlKFwiYVwiKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiYXBwXCI+XG4gICAgICA8SGVsbWV0IGRlZmF1bHRUaXRsZT1cIkFwcFwiIHRpdGxlVGVtcGxhdGU9XCJBcHAgLSAlc1wiPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICA8L0hlbG1ldD5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0UGFnZShcIkFcIil9PlN3aXRjaCB0byBBPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoXCJCXCIpfT5Td2l0Y2ggdG8gQjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKFwiQ1wiKX0+U3dpdGNoIHRvIEM8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0UGFnZShcIkRcIil9PlN3aXRjaCB0byBEPC9idXR0b24+XG4gICAgICA8RXhhbXBsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbWVzc2FnZTogXCJub3QgZGVmYXVsdFwiIH19PlxuICAgICAgICA8UmVhY3QuU3VzcGVuc2UgZmFsbGJhY2s9ezxwPkxvYWRpbmcuLi48L3A+fT5cbiAgICAgICAgICB7IHBhZ2UgPT09IFwiQVwiID8gPEEgLz4gOiBudWxsIH1cbiAgICAgICAgICB7IHBhZ2UgPT09IFwiQlwiID8gPEIgLz4gOiBudWxsIH1cbiAgICAgICAgICB7IHBhZ2UgPT09IFwiQ1wiID8gPEMgLz4gOiBudWxsIH1cbiAgICAgICAgPC9SZWFjdC5TdXNwZW5zZT5cbiAgICAgICAgPFJlYWN0LlN1c3BlbnNlIGZhbGxiYWNrPXs8cD5Mb2FkaW5nLi4uPC9wPn0+XG4gICAgICAgICAgeyBwYWdlID09PSBcIkRcIiA/IDxEIC8+IDogbnVsbCB9XG4gICAgICAgIDwvUmVhY3QuU3VzcGVuc2U+XG4gICAgICA8L0V4YW1wbGVDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBSb290ID0gKCkgPT4gKFxuICA8SGVsbWV0UHJvdmlkZXI+XG4gICAgPEFwcCAvPlxuICA8L0hlbG1ldFByb3ZpZGVyPlxuKVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPFJvb3QgLz4pXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7QUFLQSxJQUFNLElBQUksTUFBTTtBQUNkLFFBQU0sRUFBRSxZQUFZLEdBQU0sV0FBVyxjQUFjO0FBQ25ELFNBQ0UsaUNBQUMsYUFDQyxpQ0FBQyxTQUNDLGlDQUFDLGVBQU0sR0FBQyxDQUNWLEdBQ0EsaUNBQUMsWUFBRyxHQUFDLEdBQ0wsaUNBQUMsV0FBRyxPQUFRLENBQ2Q7QUFFSjtBQUNBLElBQU8sWUFBUTs7O0FDWmYsSUFBTSxJQUFJLE1BQU07QUFDZCxRQUFNLEVBQUUsWUFBWSxHQUFNLFdBQVcsY0FBYztBQUNuRCxTQUNFLGlDQUFDLGFBQ0MsaUNBQUMsU0FDQyxpQ0FBQyxlQUFNLEdBQUMsQ0FDVixHQUNBLGlDQUFDLFlBQUcsR0FBQyxHQUNMLGlDQUFDLFdBQUcsT0FBUSxDQUNkO0FBRUo7QUFDQSxJQUFPLFlBQVE7OztBQ1JmLElBQU0sSUFBSSxHQUFNLEtBQUssTUFBTSxPQUFPLGtCQUFVO0FBQzVDLElBQU0sSUFBSSxHQUFNLEtBQUssTUFBTSxPQUFPLGtCQUFVO0FBRTVDLElBQU0sTUFBTSxNQUFNO0FBQ2hCLFFBQU0sQ0FBRSxNQUFNLFdBQVksR0FBTSxTQUFTLEdBQUc7QUFDNUMsU0FDRSxpQ0FBQztBQUFBLElBQUksSUFBRztBQUFBLEtBQ04saUNBQUM7QUFBQSxJQUFPLGNBQWE7QUFBQSxJQUFNLGVBQWM7QUFBQSxLQUN2QyxpQ0FBQztBQUFBLElBQUssU0FBUTtBQUFBLEdBQVEsR0FDdEIsaUNBQUM7QUFBQSxJQUFLLE1BQUs7QUFBQSxJQUFXLFNBQVE7QUFBQSxHQUF3QyxDQUN4RSxHQUNBLGlDQUFDO0FBQUEsSUFBTyxTQUFTLE1BQU0sUUFBUSxHQUFHO0FBQUEsS0FBRyxhQUFXLEdBQ2hELGlDQUFDO0FBQUEsSUFBTyxTQUFTLE1BQU0sUUFBUSxHQUFHO0FBQUEsS0FBRyxhQUFXLEdBQ2hELGlDQUFDO0FBQUEsSUFBTyxTQUFTLE1BQU0sUUFBUSxHQUFHO0FBQUEsS0FBRyxhQUFXLEdBQ2hELGlDQUFDO0FBQUEsSUFBTyxTQUFTLE1BQU0sUUFBUSxHQUFHO0FBQUEsS0FBRyxhQUFXLEdBQ2hELGlDQUFDLGVBQWUsVUFBZjtBQUFBLElBQXdCLE9BQU8sRUFBRSxTQUFTLGNBQWM7QUFBQSxLQUN2RCxpQ0FBQyxHQUFNLFVBQU47QUFBQSxJQUFlLFVBQVUsaUNBQUMsV0FBRSxZQUFVO0FBQUEsS0FDbkMsU0FBUyxNQUFNLGlDQUFDLGVBQUUsSUFBSyxNQUN2QixTQUFTLE1BQU0saUNBQUMsZUFBRSxJQUFLLE1BQ3ZCLFNBQVMsTUFBTSxpQ0FBQyxPQUFFLElBQUssSUFDM0IsR0FDQSxpQ0FBQyxHQUFNLFVBQU47QUFBQSxJQUFlLFVBQVUsaUNBQUMsV0FBRSxZQUFVO0FBQUEsS0FDbkMsU0FBUyxNQUFNLGlDQUFDLE9BQUUsSUFBSyxJQUMzQixDQUNGLENBQ0Y7QUFFSjtBQUVBLElBQU0sT0FBTyxNQUNYLGlDQUFDLFNBQ0MsaUNBQUMsU0FBSSxDQUNQO0FBR0YsSUFBTSxZQUFZLFNBQVMsZUFBZSxNQUFNO0FBQ2hELElBQU0sT0FBTyxFQUFXLFNBQVM7QUFDakMsS0FBSyxPQUFPLGlDQUFDLFVBQUssQ0FBRTsiLAogICJuYW1lcyI6IFtdCn0K
