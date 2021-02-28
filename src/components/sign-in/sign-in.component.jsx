import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { useHistory } from "react-router-dom";

import "./sign-in.styles.scss";

//ファンクション型コンポーネント、フックでも可
const SignIn = () => {
  //Stateフック
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //ヒストリーAPIフック
  const history = useHistory();

  //ハンドル
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormData({ email: "", password: "" });
      history.push("/shop");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>アカウントをお持ちの方</h2>
      <span>メール・パスワードでログイン</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          required
          name="email"
          type="email"
          label="メールアドレス"
          value={formData.email}
          handleChange={handleChange}
        />

        <FormInput
          required
          name="password"
          type="password"
          label="パスワード"
          value={formData.password}
          handleChange={handleChange}
        />

        <div className="buttons">
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Googleでログイン
          </CustomButton>
          <CustomButton type="submit">ログイン</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
