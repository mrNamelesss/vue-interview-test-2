import http from '@/services/http'
// import mock from '@/services/mock'

let data = null;

function fetchData() {
  return http.get('http://wb-predictivemaintenance-api.prsp7vkew2.eu-central-1.elasticbeanstalk.com/api/TorqueValues')
    .then((res) => {
      data = res.data
    })
    .catch((err) => {

    })
}

const TorqueProfileResource = {
  getOpenTorqueData(profileId) {
    // return mock.TorqueData
    //   .filter((item) => item['Profile'] === profileId)
    //   .filter((item) => item['Direction'] === "Open")
    return new Promise((resolve, reject) => {
      if (data) {
        resolve(
          data.filter((item) => item['Profile'] === profileId)
            .filter((item) => item['Direction'] === "Open"))
      } else {
        fetchData()
          .then(() => {
            resolve(
              data.filter((item) => item['Profile'] === profileId)
                .filter((item) => item['Direction'] === "Open"))
          })
      }
    })
  },
  getCloseTorqueData(profileId) {
    // return mock.TorqueData
    //   .filter((item) => item['Profile'] === profileId)
    //   .filter((item) => item['Direction'] === "Close")
    return new Promise((resolve, reject) => {
      if (data) {
        resolve(
          data.filter((item) => item['Profile'] === profileId)
            .filter((item) => item['Direction'] === "Close"))
      } else {
        fetchData()
          .then(() => {
            resolve(
              data.filter((item) => item['Profile'] === profileId)
                .filter((item) => item['Direction'] === "Close"))
          })
      }
    })
  }
}

export default TorqueProfileResource