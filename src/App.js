import './App.css';
import { Header, Selection } from './component';
import GlobalContextProvider from './context/global.context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route index element={<Selection />} />
          <Route path='/regular' element={<Header />} />
          <Route path='/bonus' element={<Header />} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
