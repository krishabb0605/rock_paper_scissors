import { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [winningCount, setWinnignCount] = useState(
    JSON.parse(localStorage.getItem('winningCount'))
  );

  const [isOpen, setIsOpen] = useState([false, '']);

  const handleOpen = (isopen, value) => {
    setIsOpen([isopen, value]);
  };

  const handleCount = (result) => {
    setWinnignCount(
      result === 'reset'
        ? 0
        : result === 'win'
        ? winningCount + 1
        : result === 'lose'
        ? winningCount - 1
        : winningCount
    );
  };

  useEffect(() => {
    localStorage.setItem('winningCount', JSON.stringify(winningCount));
  }, [winningCount]);

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
