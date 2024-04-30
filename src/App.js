import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Game, Header, Layout } from './component';
import GlobalContextProvider from './context/global.context';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route index element={<Layout />} />
            <Route path='/game' element={<Game />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
