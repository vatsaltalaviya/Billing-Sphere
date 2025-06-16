import React, { useEffect, useState } from 'react'
import BasePage from '../../components/BasePage'
import FilterLedger from './FilterLedger';
import BulkUpd from './BulkUpd';
import LabelPrn from './LabelPrn';
import EnvelopPrn from './EnvelopPrn';
import OpBalance from './OpBalance';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllledgers } from '../../feature/ledgerSlice';

const Ledger = () => {
  const [filterLedger, setFilterLedger] = useState(false)
  const [showBulkData, setshowBulkData] = useState(false)
  const [showLabelPrn, setshowLabelPrn] = useState(false)
  const [showEnvelopPrn, setshowEnvelopPrn] = useState(false)
  const [showOpBal, setshowOpBal] = useState(false)
  const [itemUrl, setitemUrl] = useState(null);

    const dispatch = useDispatch()
    const {ledgers , groupMap} = useSelector((state)=>state.ledgers)

   const ledgerSidebarData = [
  { name: "New", onClick: () => {},navigate:"/dashboard/ledger/new" },
  { name: "Edit", onClick: () => {} ,navigate:`/dashboard/ledger/edit/${itemUrl}` },
  { name: "Delete", onClick: () => {} ,navigate:"/dashboard/ledger/delete/1" },
  { name: "Export-Excel", onClick: () => {} },
  { name: "BulkUpd", onClick: () => {setshowBulkData(true)} },
  { name: "Filter", onClick: () => {setFilterLedger(true)} },
  { name: "Label Prn", onClick: () => {setshowLabelPrn(true)} },
  { name: "Envelop Prn", onClick: () => {setshowEnvelopPrn(true)} },
  { name: "Envelopes", onClick: () => {} },
  { name: "Op. Bal", onClick: () => {setshowOpBal(true)} },
  { name: "Statement", onClick: () => {} },
  { name: "Dup Ledgers", onClick: () => {} },
  { name: "Non/Used", onClick: () => {} }
];

 const getUrl = (url) => {
    setitemUrl(url);
  };
  useEffect(()=>{
    dispatch(fetchAllledgers())
  },[])

  const tableData = ledgers.map((item ,idx)=>({
    Sr:idx + 1,
    id: item._id,
    "Ledger Name": item.name,
    "Ledger Group": groupMap[item.ledgerGroup],
    "Op.Balance": item.openingBalance,
    "debit Balance": item.debitBalance,
    Active: item.status,
  }))

  return (
    <div className='w-full'>
      <BasePage heading="Ledger Master"  getitemUrl={(e) => getUrl(e)} mode="ledgers" Sidebardata={ledgerSidebarData} tableData={tableData}/>

      {filterLedger && <FilterLedger onClose={()=>setFilterLedger(false)}/>}
      {showBulkData && <BulkUpd onClose={()=>setshowBulkData(false)}/>}
      {showLabelPrn && <LabelPrn onClose={()=>setshowLabelPrn(false)}/>}
      {showEnvelopPrn && <EnvelopPrn onClose={()=>setshowEnvelopPrn(false)}/>}
      {showOpBal && <OpBalance onClose={()=>setshowOpBal(false)}/>}
    </div>
  )
}

export default Ledger
