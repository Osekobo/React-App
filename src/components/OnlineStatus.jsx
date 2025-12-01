import { useState, useEffect } from "react";

function OnlineStatus() {

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="container my-4">
      <h1>
        {isOnline ? (
          <span style={{ color: "green" }}>You are online</span>
        ) : (
          <span style={{ color: "red" }}>You are offline</span>
        )}
      </h1>
    </div>
  );
}

export default OnlineStatus;
