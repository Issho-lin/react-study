import React from "react";
import RouterContext from "./context";
import matchPath from "./matchPath";

const Route = (props) => {
  return (
    <RouterContext.Consumer>
      {(context) => {
        const { location } = context;
        const { path, children, component, render, computeMatch } = props;

        const match = computeMatch
          ? computeMatch
          : path
          ? matchPath(location.pathname, props)
          : context.match;
        const _props = { ...context, match }
        return (
            <RouterContext.Provider value={_props}>
                {
                    match
                    ? children
                      ? typeof children === "function"
                        ? children(_props)
                        : children
                      : component
                      ? React.createElement(component, _props)
                      : render
                      ? render(_props)
                      : null
                    : typeof children === "function"
                    ? children(_props)
                    : null
                }
            </RouterContext.Provider>
        )
      }}
    </RouterContext.Consumer>
  );
};
export default Route;
