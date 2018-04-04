import { Bar } from 'vue-chartjs'
import TorqueProfileResource from '@/services/TorqueProfileResource'

export default {
  name: 'OpenTorqueChart',
  extends: Bar,
  mounted() {
    const torqueData = TorqueProfileResource.getOpenTorqueData(18)
    const torqueAverage = torqueData.map((it) => it['AverageTorque'])
    const torqueLast = torqueData.map((it) => it['LastTorque'])
    this.renderChart({
      labels: new Array(101).fill(0).map((_, i) => i), // [1..100]
      datasets: [
        {
          label: 'Average open torque',
          backgroundColor: '#4385f4',
          data: torqueAverage
        },
        {
          label: 'Last open torque',
          backgroundColor: '#6aa0fb',
          data: torqueLast
        }
      ]
    }, {
        //categoryPercentage: 0.1,
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Valve position'
            },
            stacked: true
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Required torque (%)'
            },
            stacked: true
          }]
        }
      })
  }
}
