import React from "react";
import styled from "styled-components";
import FixedContainer from "./FixedContainer";
import throttle from "lodash.throttle";
import Logo from "../../static/img/logo/wordmark/Wordmark_Black.svg";
import { Link } from "gatsby";

const delta = 5;
const navbarHeight = 64;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didScroll: true,
      lastScrollTop: 0,
      hidden: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  hideHeader = () => {
    this.setState({
      hide: true,
    });
  };

  showHeader = () => {
    this.setState({
      hide: false,
    });
  };

  hasScrolled = throttle(() => {
    const st = window.scrollY;
    if (Math.abs(this.state.lastScrollTop - st) <= delta) {
      return;
    }
    if (st > this.state.lastScrollTop && st > navbarHeight) {
      this.hideHeader();
    } else {
      if (st < this.getDocHeight()) {
        this.showHeader();
      }
    }
    this.setState({
      lastScrollTop: st,
    });
  }, 250);

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  handleScroll = () => {
    this.setState({
      didScroll: true,
    });
    this.hasScrolled();
  };

  render() {
    return (
      <Wrapper hide={this.state.hide}>
        <Container>
          <Link to={`/`}>
            <StyledLogo src={Logo} />
          </Link>
        </Container>
      </Wrapper>
    );
  }
}

const Container = styled(FixedContainer)`
  width: 100%;
`;

const StyledLogo = styled.img`
  height: 22px;
  margin-bottom: 0;
`;

const Wrapper = styled.header`
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05) !important;
  transition: top 0.4s ease-in-out;
  height: 64px;
  top: ${props => (props.hide ? "-64px" : 0)};
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  z-index: 9;
  display: flex;
  align-items: center;
`;

export default Header;
