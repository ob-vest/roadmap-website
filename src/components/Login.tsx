// import { useEffect } from "react";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import ApiClient from "@/services/apiClient";
import AppleSignInButton, { AppleResponse } from "./AppleSignInButton";
import { useNavigate } from "@tanstack/react-router";
import { userLogIn } from "@/utils/authState";
interface SessionCredentials {
  appleUserId: string;
  authorizationToken: string;
}

const Login = () => {
  const navigate = useNavigate();
  const handleSuccess = (data: AppleResponse) => {
    console.log("Success DATA:", data.authorization);
    console.log("Code:", data.authorization.code);

    const requestConfig: AxiosRequestConfig = {
      data: {
        code: data.authorization.code,
      },
    };
    const apiClient = new ApiClient<SessionCredentials>(
      "auth/login",
      requestConfig,
    );
    const res = apiClient.post(requestConfig.data);

    res
      .then((response: AxiosResponse<SessionCredentials>) => {
        userLogIn(response.data.authorizationToken);
        navigate({ to: "/" });
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
