import { createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [winningCount, setWinnignCount] = useState(0);

  const handleCount = (count, result) => {
    setWinnignCount(result ? winningCount + 1 : winningCount - 1);
  };

  return (
    <GlobalContext.Provider
      value={{
        winningCount,
        handleCount,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
