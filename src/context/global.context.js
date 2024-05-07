import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [winningCount, setWinnignCount] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const key =
      location.pathname === '/regular'
        ? 'winningCountRegular'
        : 'winningCountBonus';

    const storedCount = JSON.parse(localStorage.getItem(key));
    if (storedCount) {
      setWinnignCount(storedCount);
    }
  }, [location]);

  const [isOpen, setIsOpen] = useState([false, '']);

  const handleOpen = (isopen, value) => {
    isopen
      ? setTimeout(() => {
          setIsOpen([isopen, value]);
        }, 500)
      : setIsOpen([isopen, value]);
  };

  const handleCount = (result) => {
    const key =
      location.pathname === '/regular'
        ? 'winningCountRegular'
        : 'winningCountBonus';
    const count =
      result === 'reset'
        ? 0
        : result === 'win'
        ? winningCount + 1
        : result === 'lose'
        ? winningCount - 1
        : winningCount;

    setWinnignCount(count);

    localStorage.setItem(key, JSON.stringify(count));
  };

  return (
    <GlobalContext.Provider
      value={{
        winningCount,
        handleCount,
        isOpen,
        handleOpen,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
