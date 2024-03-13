import AppleSignin from "react-apple-signin-auth";

interface Authorization {
  code: string;
  id_token: string;
}

export interface AppleResponse {
  authorization: Authorization;
}
interface MyAppleSigninButtonProps {
  onSuccess: (data: AppleResponse) => void;
  onError: (error: unknown) => void;
}

/** Apple Signin button */
export const MyAppleSigninButton: React.FC<MyAppleSigninButtonProps> = ({
  onSuccess,
  ...rest
}) => (
  <AppleSignin
    /** Auth options passed to AppleID.auth.init() */
    onSuccess={onSuccess}
    // onError={(error: unknown) => console.error("error: ", error)}
    authOptions={{
      clientId: "dk.invoke.Roadmap-website",
      scope: "",
      redirectURI: "https://roadmap-website-one.vercel.app/login",
      state: "",
      usePopup: true,
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
