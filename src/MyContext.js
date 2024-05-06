// MyContext.js
import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [sdBar, setSdBar] = useState(false);

  return (
    <MyContext.Provider value={{ sdBar, setSdBar }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
