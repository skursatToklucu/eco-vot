import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { User } from "@types";

export const useCodeValidate = () => {
  const codeValidate = async (email: string, code: string) => {
    const resp = await axios.post("auth/val", {
      email,
      code,
    });
    if (resp.status === 200) {
      const token: User = jwtDecode(resp.data.token);
      Cookies.set("auth", resp.data.token, {
        sameSite: "strict",
        expires: token.exp,
      });
      return token;
    }
  };
  return { codeValidate };
};
