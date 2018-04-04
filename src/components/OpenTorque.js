import { Bar } from 'vue-chartjs'
import TorqueProfileResource from '@/services/TorqueProfileResource'

export default {
  name: 'OpenTorqueChart',
  extends: Bar,
  mounted() {
    const openTorqueData = TorqueProfileResource.getOpenTorqueData(18)
    const openTorqueAverage = openTorqueData.map((it) => it['AverageTorque'])
    this.renderChart({
      labels: new Array(101).fill(0).map((_, i) => i), // [1..100]
      datasets: [
        {
          label: 'Average open torque',
          backgroundColor: '#4385f4',
          data: openTorqueAverage
        }
      ]
    })
  }
}
