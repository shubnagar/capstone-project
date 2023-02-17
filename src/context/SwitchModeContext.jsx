import React, { createContext, useContext, useState } from "react";

const initialValue = false;

const CreateSwitchModeContextValue = createContext(initialValue);
const CreateSwitchModeContextFunction = createContext(initialValue);

const SwitchModeContext = ({ children }) => {
  const [isEditable, setIsEditable] = useState(initialValue);

  return (
    <CreateSwitchModeContextValue.Provider value={isEditable}>
      <CreateSwitchModeContextFunction.Provider value={setIsEditable}>
        {children}
      </CreateSwitchModeContextFunction.Provider>
    </CreateSwitchModeContextValue.Provider>
  );
};

export const useIsEditable = () => {
  const value = useContext(CreateSwitchModeContextValue);
  return value;
};

export const useSetIsEditable = () => {
  const fn = useContext(CreateSwitchModeContextFunction);
  const optimizedFn = React.useCallback(fn, [fn]);
  return optimizedFn;
};

export default SwitchModeContext;
