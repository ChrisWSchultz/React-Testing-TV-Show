import axios from "axios";

export const getShow = () => {
    return axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
        .then((response) => {
            return(response);
        })
        .catch((error) => {
            return(error);
        });
};
