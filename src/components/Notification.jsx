import React from 'react';

const Notification = ({ notification }) => {
  if (!notification) return null;

  return (
    <div className={`alert alert-${notification.type} text-center`} role="alert" style={{ position: 'fixed', top: 10, right: 10, zIndex: 9999, minWidth: 250 }}>
      {notification.text}
    </div>
  );
};

export default Notification;
