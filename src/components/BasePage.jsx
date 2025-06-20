import React, { useEffect, useState } from 'react'
import ButtonGroup from './ButtonGroup'
import MasterPart from './MasterPart'
import SalePurchase from './SalePurchase'
import ReceptPayment from './ReceptPayment'
import ReceivablePayable from './ReceivablePayable'
import ReceivableTable from '../pages/ReceivableTable'
import RecTabReport from './RecTabReport'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from '../feature/itemSlice'

const BasePage = ({
  Sidebardata,
  heading,
  mode,
  getitemUrl,
  subHeading,
  tableData,
  selectedProductRow,
  onDropdownRef,
  onRowsChange,
  triggerNew,
  triggerPrevious,
  focusDateTrigger
}) => {

  

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchItems())
  }, []);

  const [showSidebar, setshowSidebar] = useState(false)

  return (
    <div className='h-screen w-full relative bg-white overflow-hidden'>
      <div className={`${mode == "Sales" ?'bg-green-500':'bg-blue-500'} ${mode == "Purchase" ? 'bg-orange-400':'bg-blue-500'} ${mode == "Receipt" && 'bg-emerald-400'} ${mode == "Payment" && 'bg-orange-300'} ${mode == "Journal" && 'bg-purple-500'} ${mode == "Contra" && 'bg-indigo-500'} ${mode=="CreditNote" && 'bg-fuchsia-500'} ${mode=="DebitNote" && 'bg-fuchsia-500'} ${mode=="GST" && 'bg-fuchsia-500'} text-xl font-bold text-white`}
      >
        {subHeading ? (
          <div className="flex justify-between items-center w-full">
            <div className="flex md:hidden"></div>
            <h1 className={`px-10 bg-yellow-900 py-0.5 hidden md:block`}>{subHeading}</h1>
            <h1 className='text-center flex-1 py-0.5'>{heading}</h1>
            <div className="lg:flex hidden"></div>
            <button
              className="text-xl px-5 block xl:hidden"
              onClick={() => setshowSidebar(!showSidebar)}
            >
              <i className="ri-menu-line "></i>
            </button>
          </div>
        ) : (
          <div className="flex justify-between xl:justify-center items-center w-full">
            <div className="flex md:hidden"></div>
            <h1 className='text-center text-xl'>{heading}</h1>
            <button
              className="text-xl px-5 block xl:hidden"
              onClick={() => setshowSidebar(!showSidebar)}
            >
              <i className="ri-menu-line "></i>
            </button>
          </div>
        )}
      </div>
      <div className='flex justify-end'>
        {/* ------------------ displaying main content according their mode or table data -------------------------------- */}
       <div className='w-full h-screen overflow-y-auto p-5 sm:p-2 table-data'>
            {(mode==="item" || mode === "itemGroup" || mode=== "hsn") && <MasterPart mode={mode} getitemUrl={getitemUrl} tableData={tableData}/>}            
            {(mode==="ledgers") && <MasterPart mode={mode} getitemUrl={getitemUrl} tableData={tableData}/>}            
            
            {(mode === "Sales" || mode === "Purchase") && (
              <SalePurchase 
                mode={mode}
                selectedProductRow={selectedProductRow}
                onDropdownRef={onDropdownRef}
                onRowsChange={onRowsChange}
                triggerNew={triggerNew}
                triggerPrevious={triggerPrevious}
              />
            )}
            {(mode === "Receipt" || mode === "Payment" || mode == "Journal" ||mode == "Contra" ||mode == "CreditNote" || mode == "DebitNote" || mode == "GST") && (
              <ReceptPayment mode={mode} triggerPrevious={triggerPrevious} focusDateTrigger={focusDateTrigger}/>
            )}
            {(mode=="Receivable")&&(<ReceivablePayable />)}
            {(mode=="ReceivableTable")&&(<RecTabReport />)}
        </div>
        
        {/* --------------------------------- display sidebar  --------------------------------------------- */}
        <div className='w-48 h-screen hidden xl:block '>
            <ButtonGroup className='w-full py-2 border mb-0.5 font-bold text-left px-3' data={Sidebardata} />
        </div>
        <div className={` w-64 bg-white transform transition-all absolute duration-200 z-10 ${
            showSidebar ? "translate-x-[0%]" : " translate-x-[200%]"
          }`}>
            <ButtonGroup className='w-full py-2 border mb-0.5 font-bold text-left px-3' setshowSidebar={setshowSidebar} data={Sidebardata} />
        </div>
      </div>
    </div>
  )
}

export default BasePage
