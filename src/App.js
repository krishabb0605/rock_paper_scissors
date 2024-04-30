import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Game, Header, Layout } from './component';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<Layout />} />
          <Route path='/game' element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
