import { createContext, useMemo, useState } from "react";
import { PropTypes } from "prop-types";

const QuestContext = createContext({
  setGotKeys: null,
  setGotMonster: null,
  gotKeys: false,
  gotMonster: false,
});

export default QuestContext;

export function QuestContextProvider({ children }) {
  const [gotKey, setGotKey] = useState(false);
  const [gotMonster, setGotMonster] = useState(false);

  const context = useMemo(
    () => ({ gotKey, gotMonster, setGotKey, setGotMonster }),
    [gotMonster, gotKey]
  );

  return (
    <QuestContext.Provider value={context}>{children}</QuestContext.Provider>
  );
}

QuestContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
