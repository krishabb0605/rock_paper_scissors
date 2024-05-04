import './App.css';
import { Header } from './component';
import GlobalContextProvider from './context/global.context';

function App() {
  return (
    <GlobalContextProvider>
      <Header />
    </GlobalContextProvider>
  );
}

export default App;
