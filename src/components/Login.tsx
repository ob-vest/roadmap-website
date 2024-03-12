import { useEffect, useState } from "react";
import axios from "axios"; // or use fetch
import AppleSignInButton from "./AppleSignInButton";

const Login = () => {
  const [messageBody] = useState(null);

  useEffect(() => {
    console.log("messageBody", messageBody);
    if (messageBody) {
      // Replace with your API URL and request options
      axios
        .post(
          "https://roadmap-apiservice-production.up.railway.app/api/auth/login",
          messageBody
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [messageBody]);

  return <AppleSignInButton />;
};

export default Login;
