import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  //晒して大丈夫なキー
  const publishableKey =
    "pk_test_51IPp2DKLIyk6yvJlIIPJmm4r9cPntsxf2D0RfWUczWuGDl6HGMOdDh46XYUBOmi9Mr9o0MrXJa8nezyMCjaK5R6N002hWRCE84";

  const onToken = (token) => {
    alert("お支払いに成功しました");
    //通常はここにバックエンドのロジックが入ります
    console.log("バックエンド用のファンクションは本来ここに", token);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <p>カード番号 "4242-4242-4242-4242　01/23　123" で試してみて下さい</p>
      <StripeCheckout
        label="支払う"
        name="Crwn Apparel"
        billingAddress
        shippingAddress
        image="/crown.svg"
        description={`合計は¥${price}になります`}
        amount={price}
        panelLabel="支払う"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
