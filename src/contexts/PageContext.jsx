"use client";

import { createContext, useState } from "react";

export const PageContext = createContext();

const PageContextProvider = ({ children }) => {
  const [stage, setStage] = useState("bio");
  const [language, setLanguage] = useState("it");
  return (
    <PageContext.Provider value={{ stage, setStage, language, setLanguage }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
