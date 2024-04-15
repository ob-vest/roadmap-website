// import { useEffect } from "react";
import { AxiosResponse } from "axios";
import apiClient from "@/services/apiClient";
import AppleSignInButton, { AppleResponse } from "./AppleSignInButton";

interface SessionCredentials {
  appleUserId: string;
  authorizationToken: string;
}

const Login = () => {
  const handleSuccess = (data: AppleResponse) => {
    console.log("Success DATA:", data.authorization);
    console.log("Code:", data.authorization.code);

    apiClient
      .post("auth/login", {
        code: data.authorization.code,
      })
      .then((response: AxiosResponse<SessionCredentials>) => {
        localStorage.setItem(
          "authorizationToken",
          response.data.authorizationToken,
        );
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <AppleSignInButton
      onSuccess={handleSuccess}
      onError={(error) => console.error("Error:", error)}
    />
  );
};

export default Login;
