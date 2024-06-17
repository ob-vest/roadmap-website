import { useNavigate } from "@tanstack/react-router";
import { userLogOut } from "@/utils/authState";

export function useUserLogOut() {
  const navigate = useNavigate();

  return function logOut() {
    userLogOut();
    navigate({ to: "/login" });
  };
}
