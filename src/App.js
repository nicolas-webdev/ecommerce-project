import React from "react";
import "./App.css";

//Reactラウター
import { Switch, Route } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

//ファイアベース
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

//コンポーネント
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

//クラス型コンポーネントバージョン
class App extends React.Component {
  unsubscribeFromAuth = null;

  //ライフサイクルメソード
  //useEffectの代わりに
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //ユーザーがログインしたかをチェック
      if (userAuth) {
        //データベースへ送ってみる
        const userRef = await createUserProfileDocument(userAuth);
        //アプリのステータスを更新
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      //ユーザーが存在しないなら、nullのままでセット
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
