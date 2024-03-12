import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
const NavBar = () => {
  return (
    <>
      <div className="flex justify-end">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link className={navigationMenuTriggerStyle()} to="/">
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link className={navigationMenuTriggerStyle()} to="/requests">
                Requests
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className={navigationMenuTriggerStyle()} to="/login">
                Login
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className={navigationMenuTriggerStyle()} to="/requests">
                Logout
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
};

export default NavBar;
