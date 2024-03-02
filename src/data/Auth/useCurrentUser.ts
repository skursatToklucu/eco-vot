import React from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { User } from "@types";

export const useCurrentUser = () => {
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const jwt = Cookies.get("auth");
    if (jwt) {
      const currentUser = jwtDecode<User>(jwt);
      if (currentUser) {
        setUser(currentUser);
      }
    }
  }, []);

  return user;
};
