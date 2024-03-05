import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Index</h1>} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
