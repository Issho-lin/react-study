import React from "react";
import RouterContext from "./context";
import matchPath from "./matchPath";

class Route extends React.Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const { location } = context;
          const { path, component, render, children, computedMatch } =
            this.props;
          const match = computedMatch
            ? computedMatch
            : path
            ? matchPath(location.pathname, this.props)
            : context.match;
          const props = { ...context, match };
          return (
            <RouterContext.Provider value={props}>
              {match
                ? children
                  ? typeof children === "function"
                    ? children(props)
                    : children
                  : component
                  ? React.createElement(component, props)
                  : render
                  ? render(props)
                  : null
                : typeof children === "function"
                ? children(props)
                : null}
            </RouterContext.Provider>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
export default Route;
