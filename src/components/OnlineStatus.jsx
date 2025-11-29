import { useState, useEffect } from "react";

function OnlineStatus() {

  // initial value = navigator.onLine
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // when internet comes back
    function handleOnline() {
      setIsOnline(true);
    }

    // when internet goes off
    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // cleanup when component unmounts
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
