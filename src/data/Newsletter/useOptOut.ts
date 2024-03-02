import axios from "axios";

export const useOptOut = () => {
  const optOut = async (email: string) => {
    const resp = await axios.post("newsletter/optout", {
      email,
    });
    if (resp.status === 200) {
      return true;
    }
  };
  return { optOut };
};
