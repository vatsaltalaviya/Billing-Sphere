import React, { useEffect, useState } from "react";
import Datatable from "./Datatable";
import { useDispatch, useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";
import NoTableData from "./NoTableData";
import { setItemSearchQuery } from "../feature/itemSlice";
import { setLedgerSearchQuery } from "../feature/ledgerSlice";

const MasterPart = ({ getitemUrl, mode, tableData }) => {
  const itemLoading = useSelector((state) => state.items.loading);
  const ledgerLoading = useSelector((state) => state.ledgers.loading);
  const dispatch = useDispatch();
  const query = useSelector((state) => state.items.searchquery);
  const ledgerquery = useSelector((state) => state.ledgers.searchledgerquery);

  const loading = itemLoading || ledgerLoading;
  return (
    <div className="h-full w-full xl:px-5">
      {/* ----------------------------- search ----------------------------------------------- */}
      <div className={`${[
            "itemGroup",
            "hsn",
            "tax",
            "brand",
            "unit",
            "store",
          ].includes(mode) ? "md:w-5xl md:mx-auto ":'w-full '} pt-5 pb-0.5 `}>
        <form className="flex">
          <span className="bg-white border font-medium px-3 py-1">Search</span>
          {[
            "item",
            "itemGroup",
            "hsn",
            "tax",
            "brand",
            "unit",
            "store",
          ].includes(mode) && (
            <input
              type="text"
              className={`bg-white border font-medium px-3 w-full`}
              value={query}
              onChange={(e) => dispatch(setItemSearchQuery(e.target.value))}
            />
          )}
          {mode == "ledgers" && (
            <input
              type="text"
              className="bg-white border font-medium px-3 w-full"
              value={ledgerquery}
              onChange={(e) => dispatch(setLedgerSearchQuery(e.target.value))}
            />
          )}
        </form>
      </div>
      {/* -------------------------------- table ------------------------------ */}
      {loading ? (
        <div className="w-full flex justify-center items-center min-h-[80vh] max-h-[85vh] table-data overflow-y-auto">
          <ScaleLoader height="30px" color="blue" />
        </div>
      ) : (
        <div className={`${[
            "itemGroup",
            "hsn",
            "tax",
            "brand",
            "unit",
            "store",
          ].includes(mode) ? "md:w-5xl md:mx-auto ":'w-full '}  flex justify-center max-h-[85vh] min-h-[80vh] table-data overflow-y-auto`}>
          {["item","ledgers","itemGroup", "hsn", "tax", "brand", "unit", "store"].includes(
            mode
          ) &&
            tableData &&
            (tableData.length > 0 ? (
              <Datatable mode={mode} getitemUrl={getitemUrl} list={tableData} />
            ) : (
              <NoTableData mode={mode} list={tableData}/>
            ))}
        </div>
      )}
    </div>
  );
};

export default MasterPart;
