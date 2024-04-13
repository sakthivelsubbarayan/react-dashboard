
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highmaps";
import users from '../../constants/users';

const dataSets =[
  {
    name: 'AB-',
    y: ((users.filter((user)=>user.bloodGroup==='AB-').length/users.length)*100)
},
{
  name: 'A-',
  y: (users.filter((user)=>user.bloodGroup==='A-').length/users.length)*100
},
{
  name: 'O-',
  y: (users.filter((user)=>user.bloodGroup==='O-').length/users.length)*100
},
{
  name: 'B-',
  y: (users.filter((user)=>user.bloodGroup==='B-').length/users.length)*100
},
{
  name: 'O+',
  y: (users.filter((user)=>user.bloodGroup==='O+').length/users.length)*100
},
{
  name: 'A+',
  y: (users.filter((user)=>user.bloodGroup==='A+').length/users.length)*100
},
{
  name: 'B+',
  y: (users.filter((user)=>user.bloodGroup==='B+').length/users.length)*100
},
]
const pieOptions = {
  chart: {
      type: 'pie'
  },
  title: {
      text: 'Blood group'
  },
  tooltip: {
      valueSuffix: '%'
  },
  labels: {
    enabled: false
},
credits: {
    enabled: false
},
  plotOptions: {
      series: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: [{
              enabled: true,
              distance: 20
          }, {
              enabled: true,
              distance: -40,
              format: '{point.percentage:.1f}%',
              style: {
                  fontSize: '1.2em',
                  textOutline: 'none',
                  opacity: 0.7
              },
              filter: {
                  operator: '>',
                  property: 'percentage',
                  value: 10
              }
          }]
      }
  },
  series: [
      {
          name: 'Percentage',
          colorByPoint: true,
          data: dataSets
      }
  ]
}

function PieChart() {
  return (
    <div className="charts-container center">
      <>
       <HighchartsReact highcharts={Highcharts} options={pieOptions} />
      </>
    </div>
  );
}

export default PieChart;