import { useEffect, useState } from "react";
import { isThemeDark, setTheme } from "../frameworks-and-drivers/theme";

export default () => {
  const [dark, setDark] = useState(isThemeDark());

  useEffect(() => {
    setTheme(dark);
  }, [dark]);

  return (
    <button
      className="inline-block rounded-lg overflow-x-auto h-8"
      onClick={() => {
        setDark(!dark);
      }}
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
};
