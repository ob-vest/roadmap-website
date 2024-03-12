import AppleSignin from "react-apple-signin-auth";

/** Apple Signin button */
export const MyAppleSigninButton = ({ ...rest }) => (
  <AppleSignin
    /** Auth options passed to AppleID.auth.init() */
    onSuccess={(data: unknown) => console.log(data)}
    onError={(error: unknown) => console.error(error)}
    authOptions={{
      clientId: "dk.invoke.Roadmap-website",
      scope: "",
      redirectURI: "https://roadmap-website-one.vercel.app/login",
      state: "",
      usePopup: false,
    }}
    /** General props */
    uiType="dark"
    /** className */
    className="apple-auth-btn"
    /** Allows to change the button's children, eg: for changing the button text */
    buttonExtraChildren="Continue with Apple"
    /** Checkout README.md for further customization props. */
    /** Spread rest props if needed */

    {...rest}
  />
);

export default MyAppleSigninButton;
