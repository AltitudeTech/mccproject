import { Fragment } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import "./Nav.scss";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px"
  },
  bmBurgerBars: {
    background: "#373a47"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: "#1F1F1F",
    padding: "2.5em 0 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em 0"
  },
  bmItem: {
    display: "block",
    textAlign: "center",
    padding: "0.5em 0",
    color: "#fff"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

const Nav = props => (
  <Fragment>
    <MyMenu />
    <section
      className={`${props.homepage ? "banner" : "banner1"} flex-center`}
      style={{ backgroundImage: `url(/static/images/${props.image})` }}
    >
      {props.homepage && (
        <div className="banner_info">
          <p>Enhance your chances of landing your dream Job</p>
          <h3>FIND YOUR FUTURE</h3>
          <Link href="">
            <a> Get Started</a>
          </Link>
        </div>
      )}
      {props.pageTitle && (
        <div className="banner_info">
          <h3 style={{ color : props.gold ? "#8d730f" : ""}}>{props.pageTitle}</h3>
        </div>
      )}
    </section>
  </Fragment>
);

export default Nav;

class MyMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu styles={styles} right>
        <Link href="">
          <a onClick={this.showSettings} className="menu-item--small" href="">
            MENU
          </a>
        </Link>
        <Link href="/">
          <a id="home" className="menu-item">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a id="about" className="menu-item">
            About
          </a>
        </Link>
        <Link href="/student">
          <a id="student" className="menu-item">
            Student
          </a>
        </Link>
        <Link href="/institution">
          <a id="institution" className="menu-item">
            Institution
          </a>
        </Link>
        <Link href="/pricing">
          <a id="pricing" className="menu-item">
            Pricing
          </a>
        </Link>
        <Link href="/contact">
          <a id="contact" className="menu-item">
            Contact
          </a>
        </Link>
        <Link href="/login">
          <a id="contact" className="menu-item">
            Login
          </a>
        </Link>
        <style jsx>{`
          a.menu-item {
            display: block;
            text-align: center;
            padding: 0.5em 0;
            color: #fff;
          }
          .menu-item:hover {
            color: #e5e5e5 !important;
          }
          .menu-item--small {
            display: block;
            color: #fff;
            text-align: center;
            font-weight: bold;
            font-size: 1.5em;
            padding : .7em 0 ;
            background: linear-gradient(
              90deg,
              #005f52 0%,
              #6c0b69 100%
            ) !important;
          }
        `}</style>
      </Menu>
    );
  }
}
