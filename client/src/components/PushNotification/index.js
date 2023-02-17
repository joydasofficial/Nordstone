import React from "react";
import addNotification from "react-push-notification";

const PushNotification = () => {
  const handleClick = () => {
    addNotification({
      title: "Warning",
      subtitle: "This is a subtitle",
      message: "This is a very long message",
      theme: "darkblue",
      native: true, // when using native, your OS will handle theming.
    });
  };

  return <div>
    <button onClick={handleClick}>Click me if you can!</button>
  </div>;
};

export default PushNotification;
