const axios = require("axios").default;
const baseUrl = "http://localhost:3000/";
const APIENDPOINTS = {
  getAllAnnouncements: baseUrl + "announcement",
};

export default function getAllAnnouncementsApi() {
  axios
    .get(baseUrl + "announcement")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
