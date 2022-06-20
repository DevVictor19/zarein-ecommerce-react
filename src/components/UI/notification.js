import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./notification.module.css";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  let notificationClass = classes.notificationHide;

  if (notification.show) {
    notificationClass = classes.notificationShow;
  }

  return (
    <div className={`${classes.notification} ${notificationClass}`}>
      <div className={classes.title}>
        <h1>{notification.title}</h1>
      </div>
      <div className={classes.info}>
        {notification.link && (
          <Link to={notification.linkPath}>{notification.linkText}</Link>
        )}
        {!notification.link && <p>{notification.message}</p>}
      </div>
    </div>
  );
};

const overlayDivElement = document.getElementById("overlays");

const NotificationModal = () => {
  return ReactDOM.createPortal(<Notification />, overlayDivElement);
};

export default NotificationModal;
