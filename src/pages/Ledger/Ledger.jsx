import React, { useEffect, useState } from 'react'
import BasePage from '../../components/BasePage'
import FilterLedger from './FilterLedger';
import BulkUpd from './BulkUpd';
import LabelPrn from './LabelPrn';
import EnvelopPrn from './EnvelopPrn';
import OpBalance from './OpBalance';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAlert, deleteLedger, fetchAllledgers, PositiveRes } from '../../feature/ledgerSlice';
import DeleteAlert from '../../components/DeleteAlert';
import { useNavigate } from 'react-router-dom';

const Ledger = () => {
  const [filterLedger, setFilterLedger] = useState(false)
  const [showBulkData, setshowBulkData] = useState(false)
  const [showLabelPrn, setshowLabelPrn] = useState(false)
  const [showEnvelopPrn, setshowEnvelopPrn] = useState(false)
  const [showOpBal, setshowOpBal] = useState(false)
  const [itemUrl, setitemUrl] = useState(null);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { groupMap ,searchingLedgers,ShowDeleteAlert , clickYes , ledgerDelete} = useSelector((state)=>state.ledgers)
    

   const ledgerSidebarData = [
  { name: "New", onClick: () => {},navigate:"/dashboard/ledger/new" },
  { name: "Edit", onClick: () => {} ,navigate:(itemUrl!= null && searchingLedgers.length > 0)?`/dashboard/ledger/edit/${itemUrl}`:'/dashboard/ledger' },
  { name: "Delete", onClick: () => {
    ((itemUrl != null)&& dispatch(deleteAlert(true)))
  }  },
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
  useEffect(()=>{
    dispatch(fetchAllledgers())
  },[ledgerDelete])

  const tableData = searchingLedgers.map((item ,idx)=>({
    Sr:idx + 1,
    id: item._id,
    "Ledger Name": item.name,
    "Ledger Group": groupMap[item.ledgerGroup],
    "Op.Balance": item.openingBalance,
    "debit Balance": item.debitBalance,
    Active: item.status,
  }))


  const handleDelete = async () => {
        ((itemUrl != null)&&dispatch(deleteLedger({editId:itemUrl})).unwrap().then(()=>{navigate('/dashboard/ledger')}))
        dispatch(PositiveRes(false))
      };
       useEffect(()=>{
            if(clickYes){
              handleDelete()
              dispatch(fetchAllledgers())
            }
          },[clickYes])

  return (
    <div className='w-full'>
      <BasePage heading="Ledger Master"  getitemUrl={(e) => getUrl(e)} mode="ledgers" Sidebardata={ledgerSidebarData} tableData={tableData}/>

      {filterLedger && <FilterLedger onClose={()=>setFilterLedger(false)}/>}
      {showBulkData && <BulkUpd onClose={()=>setshowBulkData(false)}/>}
      {showLabelPrn && <LabelPrn onClose={()=>setshowLabelPrn(false)}/>}
      {showEnvelopPrn && <EnvelopPrn onClose={()=>setshowEnvelopPrn(false)}/>}
      {showOpBal && <OpBalance onClose={()=>setshowOpBal(false)}/>}
      {ShowDeleteAlert && searchingLedgers.length > 0 && <DeleteAlert field="Ledger Entry" onYes={()=>dispatch(PositiveRes(true))} onClose={()=>dispatch(deleteAlert(false))}/>}

    </div>
  )
}

export default Ledger
