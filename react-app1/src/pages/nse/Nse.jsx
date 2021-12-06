import "./nse.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { nseRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Mcx() {  
  const columns = [
    {
      field: "script",
      headerName: "SCRIPT",
      width: 200,
    },
    {
        field: "bid",
        headerName: "BID",
        width: 100,
        renderCell: (params) => {
          return (
            <div className="nseBid">
              <Link to={"/sellNse/" + params.row.id}>
              <button className="nseBidbtn">Sell</button>
              </Link>
              {params.row.bid}
            </div>
          );
        },
      },
    {
        field: "ask",
        headerName: "ASK",
        width: 100,
        renderCell: (params) => {
          return (
            <div className="nseAsk">
              <Link to={"/buyNse/" + params.row.id}>
              <button className="nseAskbtn">Buy</button>
              </Link>
              {params.row.bid}
            </div>
          );
        },
      },
    { field: "ltp", headerName: "LTP:", width: 120 },
    { field: "chg", headerName: "CHG:", width: 120 },
    { field: "high", headerName: "HIGH:", width: 120 },
    { field: "low", headerName: "LOW:", width: 120 },
    { field: "open", headerName: "OPEN:", width: 150 },
    { field: "close", headerName: "CLOSE:", width: 150 },
    { field: "oi", headerName: "OI:", width: 120 },
    { field: "vol", headerName: "VOLUME:", width: 150 },
  ];

  return (
    <div className="nseList">
      <DataGrid
        rows={nseRows}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        // checkboxSelection
      />
    </div>
  );
}
