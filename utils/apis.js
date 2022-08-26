const axios = require("axios").default;
const baseUrl = process.env.REACT_APP_BASEURL || "http://localhost:3000/";
const APIENDPOINTS = {
  getAllAnnouncements: baseUrl + "announcement",
  getAllFaculty: baseUrl + "faculty",
};

function getAllAnnouncementsApi() {
  return new Promise((resolve, reject) => {
    axios
      .get(APIENDPOINTS.getAllAnnouncements)
      .then(function (response) {
        // handle success
        //console.log(response);
        resolve(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  });
}

function getAllFaculty() {
  return new Promise((resolve, reject) => {
    axios
      .get(APIENDPOINTS.getAllFaculty)
      .then(function (response) {
        // handle success
        //console.log(response);
        resolve(response.data.data);
      })
      .catch(function (error) {
        // handle error
        //console.log(error);
      })
      .then(function () {
        // always executed
      });
  });
}

export default { getAllAnnouncementsApi, getAllFaculty };
