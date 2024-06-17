import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
import { isUserLoggedIn } from "@/utils/authState";
import { useUserLogOut } from "@/hooks/useUserLogOut";
import { Button } from "./ui/button";

const NavBar = () => {
  const logOut = useUserLogOut();
  return (
    <>
      <div className="flex justify-end ">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link className={navigationMenuTriggerStyle()} to="/">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className={navigationMenuTriggerStyle()} to="/users">
                Users
              </Link>
              <Link className={navigationMenuTriggerStyle()} to="/requests">
                Requests
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {isUserLoggedIn() ? (
                <Button
                  className={`${navigationMenuTriggerStyle()} text-white`}
                  onClick={logOut}
                >
                  Log out
                </Button>
              ) : (
                <Link className={navigationMenuTriggerStyle()} to="/login">
                  Login
                </Link>
              )}
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <Link
                className={navigationMenuTriggerStyle()}
                to="/request-review"
              >
                Logout
              </Link>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
};

export default NavBar;
