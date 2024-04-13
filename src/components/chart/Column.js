
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highmaps";
import users from '../../constants/users';

const dataSetObj = Object.groupBy(users, ({ age }) => age);
const categoriesList = Object.keys(dataSetObj)

const seriesData = categoriesList.map((key)=>dataSetObj[key].length)
const columnOptions = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Population based on age',
        align: 'left'
    },
    xAxis: {
        categories: categoriesList,
        crosshair: true,
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Age'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Age',
            data: seriesData
        },
    ]
}

function ColumnChart() {
  return (
    <div className="charts-container center">
      <>
       <HighchartsReact highcharts={Highcharts} options={columnOptions} />
      </>
    </div>
  );
}

export default ColumnChart;