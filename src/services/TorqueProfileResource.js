// import http from '@/services/http'
import mock from '@/services/mock'

const TorqueProfileResource = {
  getOpenTorqueData(profileId) {
    return mock.TorqueData
      .filter((item) => item['Profile'] === profileId)
      .filter((item) => item['Direction'] === "Open")
  },
  getCloseTorqueData(profileId) {
    return mock.TorqueData
      .filter((item) => item['Profile'] === profileId)
      .filter((item) => item['Direction'] === "Close")
  }
}

export default TorqueProfileResource