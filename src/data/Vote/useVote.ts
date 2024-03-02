import axios from "axios";
import Cookies from "js-cookie";

export const useVote = () => {
  const vote = async (id: number, decision: number) => {
    const jwt = Cookies.get("auth");
    try {
      const resp = await axios.post(
        `vote/${id}`,
        {
          decision,
        },
        {
          headers: {
            Authorization: "Bearer " + jwt,
          },
        }
      );
      if (resp.status === 201) {
        return resp.data;
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  return { vote };
};
