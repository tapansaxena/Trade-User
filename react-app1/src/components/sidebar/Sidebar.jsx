import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  LineStyle,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              <Link to={"/"}>Home</Link>
            </li>
            {/* <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                <Link to={"/users"}>Users</Link>
            </li> */}

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
              
            <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                <Link to={"/mcx"}>MCX Futures</Link>
            </li>
            <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                <Link to={"/nse"}>NSE Futures</Link>
            </li>
            <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                <Link to={"/trades"}>Trades</Link>
            </li>
            {/* <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li> */}
          </ul>
        </div>        
      </div>
    </div>
  );
}