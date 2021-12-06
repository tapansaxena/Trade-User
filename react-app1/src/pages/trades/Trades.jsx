import "./trades.css";

export default function Trades() {
    return (
        <div className="tradesList">
            <div className="tradehead">
                <div className="tradeOrdersTitle">
                     PENDING
                </div>
                <div className="v2"></div>
                <div className="tradeOrdersTitle">
                     ACTIVE
                </div>
                <div className="v2"></div>
                <div className="tradeOrdersTitle">
                     CLOSED
                </div>
            </div>
            <div className="tradebody">
                <div className="pendingOrders">
                    No Pending Orders...
                </div>
                <div className="vl"></div>
                <div className="activeOrders">
                    No Active Trades...
                </div>
                <div className="vl"></div>
                <div className="closedOrders">
                    No Closed Trades...
                </div>
            </div>
        </div>
    )
}
