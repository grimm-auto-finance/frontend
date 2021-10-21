import { useEffect, useState } from "react";

export default () => {
  const [message, setMessage] = useState("");

  function updateMessage() {
    fetch(import.meta.env.VITE_BACKEND_BASE_URL + "/loan", { method: "POST" })
      .then(async (res) => setMessage(await res.text()))
      .catch((err) => console.error(err));
  }

  useEffect(updateMessage, []);

  return (
    <div>
      <div>
        API says: <code>{message}</code>
      </div>
      <button type="button" onClick={updateMessage}>
        Refresh Message
      </button>
    </div>
  );
};
