import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          ショップ
        </Link>
        <Link className="option" to="/shop">
          お問い合わせ
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            ログアウト
          </div>
        ) : (
          <Link className="option" to="/signin">
            ログイン
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
