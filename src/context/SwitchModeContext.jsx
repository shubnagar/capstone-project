import React, { createContext, useContext, useState } from "react";

const initialValue = false;

export const CreateSwitchModeContextValue = createContext(initialValue);

const SwitchModeContext = ({ children }) => {
  const [isEditable, setIsEditable] = useState(initialValue);

  const value = { isEditable, setIsEditable };
  return (
    <CreateSwitchModeContextValue.Provider value={value}>
      {children}
    </CreateSwitchModeContextValue.Provider>
  );
};

export const useIsEditable = () => {
  const { isEditable } = useContext(CreateSwitchModeContextValue);
  return isEditable;
};

export const useSetIsEditable = () => {
  const { setIsEditable } = useContext(CreateSwitchModeContextValue);
  return setIsEditable;
};

export default SwitchModeContext;
