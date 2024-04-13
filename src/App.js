import { Helmet } from 'react-helmet';
import Charts from './pages/Charts';
import DataTables from './pages/Datatable';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import PrivateRoutes from './components/Auth';

function App() {

  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/dist/output.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Helmet>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Dashboard />} />
            <Route path="/chart" element={<Charts />} />
            <Route path="/table" element={<DataTables />} />
          </Route>
        </Route>
      </Routes>
    </div>

  );
}

export default App;
