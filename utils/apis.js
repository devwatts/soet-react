const axios = require("axios").default;
const baseUrl = "https://soet-backend.herokuapp.com/";
//const baseUrl = "http://localhost:3000/";
const APIENDPOINTS = {
  getAllAnnouncements: baseUrl + "announcement",
  getAllFaculty: baseUrl + "faculty",
  getAllAchievements: baseUrl + "achievement",
  getAllEvents: baseUrl + "events",
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

function getAllAchievementsApi() {
  return new Promise((resolve, reject) => {
    axios
      .get(APIENDPOINTS.getAllAchievements)
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

function getAllEvents() {
  return new Promise((resolve, reject) => {
    axios
      .get(APIENDPOINTS.getAllEvents)
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

export default {
  getAllAnnouncementsApi,
  getAllFaculty,
  getAllAchievementsApi,
  getAllEvents,
};
