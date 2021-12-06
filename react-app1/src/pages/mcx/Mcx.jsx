import "./mcx.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { mcxRows } from "../../dummyData";
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
            <div className="mcxBid">
              <Link to={"/sellMcx/" + params.row.id}>
                <button className="mcxBidbtn">Sell</button>
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
            <div className="mcxAsk">
              <Link to={"/buyMcx/" + params.row.id}>
                <button className="mcxAskbtn">Buy</button>
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
      <div className="mcxList">
        <DataGrid
          rows={mcxRows}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          // checkboxSelection
        />
      </div>
  );
}
