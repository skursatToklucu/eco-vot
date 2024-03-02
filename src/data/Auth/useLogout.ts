import Cookies from "js-cookie";

export const useLogout = () => {
  const logout = () => {
    Cookies.remove("auth", {
      sameSite: "strict",
    });
  };
  return { logout };
};
