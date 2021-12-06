
import "./Topbar.css";
import { NotificationsNone } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Trading Master</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          {/* <div className="topbarIconContainer">
            <Settings />
          </div> */}
          <img src="https://www.assisi.ac.in/themes/user/assets/img/avatar/male.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}