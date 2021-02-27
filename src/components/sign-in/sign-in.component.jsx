import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
  //State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //ハンドル
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ email: "", password: "" });
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

        <CustomButton type="submit">ログイン</CustomButton>
        <CustomButton onClick={signInWithGoogle}>Googleでログイン</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
