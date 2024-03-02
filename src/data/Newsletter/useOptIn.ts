import axios from "axios";

export const useOptIn = () => {
  const optIn = async (email: string) => {
    const resp = await axios.post("newsletter/optin", {
      email,
    });
    if (resp.status === 200 || resp.status === 201) {
      return true;
    }
  };
  return { optIn };
};
