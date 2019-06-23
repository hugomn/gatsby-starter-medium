import React from "react";
import { ThemeProvider } from "styled-components";

import { rhythm } from "../utils/typography";
import theme from "../themes/theme";
import Header from "./Header";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(4)}  ${rhythm(3 / 4)} ${rhythm(1.5)}`,
            }}
          >
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default Layout;
