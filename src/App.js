import React from "react";
import "./App.css";

//React Router
import { Switch, Route } from "react-router-dom";

//コンポーネント
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

//ファイアベース
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

//クラス型コンポーネントバージョン
class App extends React.Component {
  constructor() {
    super();

    //useStateの代わりに
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  //ライフサイクルメソード
  //useEffectの代わりに
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //ユーザーがログインしたかをチェック
      if (userAuth) {
        //データベースへ送ってみる
        const userRef = await createUserProfileDocument(userAuth);
        //アプリのステータスを更新
        userRef.onSnapshot((snapShot) => {
          this.setState({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      //ユーザーが存在しないなら、nullのままでセット
      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
