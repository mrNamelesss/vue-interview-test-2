// import http from '@/services/http'
import mock from '@/services/mock'

const TorqueProfileResource = {
  getOpenTorqueData(profileId) {
    // profileId === 18
    return mock.TorqueData
      .filter((item) => item['Direction'] === "Open")
      .filter((item) => item['Profile'] === profileId)
  }
}

export default TorqueProfileResource