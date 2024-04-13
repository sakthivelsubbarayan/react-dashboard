import LineChart from '../components/chart/Line';
import PieChart from '../components/chart/Pie';
import ColumnChart from '../components/chart/Column';
import GaugeChart from '../components/chart/Gauge';
import MapChart from '../components/chart/Map';

function Charts() {

  return (
    <>
      <div class="grid gap-x-8 gap-y-4 grid-cols-2">
      <LineChart />
      <GaugeChart/>
      <PieChart />
      <ColumnChart />
      </div>
      <MapChart />
    </>
  );
}

export default Charts;
