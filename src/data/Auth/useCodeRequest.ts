import axios from "axios";

export const useCodeRequest = () => {
  const codeRequest = async (email: string, optIn?: boolean) => {
    const resp = await axios.post("auth/gen", {
      email,
      optIn,
    });
    if (resp.status === 200) {
      return true;
    } else {
    }
  };
  return { codeRequest };
};
