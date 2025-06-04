import React, { useState } from 'react'
import PopUp from '../../components/PopUp'
import SearchableDropdown from '../../components/SearchableDropdown'
import { ledgergroup } from '../../assets/LedgerGroup'
import { indianStates } from '../../assets/IndianStates'

const FilterLedger = ({onClose}) => {
    const [filter, setfilter] = useState({
        ledgergroup:'',
        state:'',
        billWise:'no',
        activeLedger:'yes',
        createdDay:''

    })

    console.log(filter);
    
  return (
   <PopUp onClose={onClose}>
    <div className='lg:w-[500px] border bg-white'>
        <div className='flex justify-center bg-blue-600'>
            <h1 className='text-xl font-semibold text-white'>Filter Report Parameter</h1>
        </div>
        <div className='flex justify-start'>
            <form action="">
                <div className='flex flex-col md:flex-row px-2 py-1 xl:items-center'>
                    <span className='w-70'>Ledger Group</span>
                    <SearchableDropdown className=" px-2 py-2 border flex-1" options={ledgergroup} value={filter.ledgergroup} id='ledgerGroup' onChange={(val)=>{
                        const update = {...filter};
                        update.ledgergroup = val.target.value;
                        setfilter(update);
                    }
                    } />
                </div>
                <div className='flex flex-col md:flex-row px-2 py-1 xl:items-center'>
                    <span className='w-44'>State</span>
                    <select className='px-2 py-2 border w-52' value={filter.state} onChange={(val)=>{
                        const update = {...filter}
                        update.state = val.target.value;
                        setfilter(update)
                    }}>
                        {indianStates.map((states,idx)=>(
                            <option key={idx} value={states}>{states}</option>
                        ))}
                        
                    </select>
                </div>
                <div className='flex flex-col md:flex-row px-2 py-1 xl:items-center'>
                    <span className='w-44'>Billwise Req</span>
                    <select className='px-2 py-2 border w-52' value={filter.billWise} onChange={(val)=>{
                        const update = {...filter}
                        update.billWise = val.target.value;
                        setfilter(update)
                    }}>
                       <option value="yes">Yes</option>
                       <option value="no">No</option>
                        
                    </select>
                </div>
                <div className='flex flex-col md:flex-row px-2 py-1 xl:items-center'>
                    <span className='w-44'>Active Ledgers</span>
                   <select className='px-2 py-2 border w-52' value={filter.activeLedger} onChange={(val)=>{
                        const update = {...filter}
                        update.activeLedger = val.target.value;
                        setfilter(update)
                    }}>
                       <option value="yes">Yes</option>
                       <option value="no">No</option>
                        
                    </select>
                </div>
                <div className='flex flex-col md:flex-row px-2 py-1 xl:items-center'>
                    <span className='w-44'>Created Within Day</span>
                    <input type='number' className="px-2 py-2 border w-32" value={filter.createdDay} onChange={(val)=>{
                        const update = {...filter};
                        update.createdDay = val.target.value;
                        setfilter(update);
                    }
                    } />
                </div>
                <div className="flex flex-col md:flex-row gap-2 my-10 md:justify-center">
              <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                Show
              </button>
              <button
                onClick={onClose}
                className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500"
              >
                Close
              </button>
            </div>
            </form>
        </div>
    </div>
   </PopUp>
  )
}

export default FilterLedger
