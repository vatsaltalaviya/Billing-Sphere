import React from 'react'
import PopUp from '../../components/PopUp';

const Filteritem = ({onClose}) => {
  return (
  <div className='w-full h-full flex justify-center items-center'>
    <div className='lg:w-[800px] border bg-white'>
        <div className='flex justify-center bg-blue-600'>
            <h1 className='text-xl font-semibold text-white'>Filter Report Parameter</h1>
        </div>
        <div className='flex justify-start'>
            <form action="">
                <div className='flex flex-col md:flex-row px-2 py-1 xl:items-center'>
                    <span className='w-70'>Item Group</span>
                    {/* <SearchableDropdown className=" px-2 py-2 border flex-1" options={ledgergroup} value={filter.ledgergroup} id='ledgerGroup' onChange={(val)=>{
                        const update = {...filter};
                        update.ledgergroup = val.target.value;
                        setfilter(update);
                    }
                    } /> */}
                    <input type="text" className=" px-2 py-2 border flex-1"/>
                </div>
                <div className='flex flex-col md:flex-row px-2 py-1 xl:items-center'>
                    <span className='w-70'>Item Type</span>
                    {/* <SearchableDropdown className=" px-2 py-2 border flex-1" options={ledgergroup} value={filter.ledgergroup} id='ledgerGroup' onChange={(val)=>{
                        const update = {...filter};
                        update.ledgergroup = val.target.value;
                        setfilter(update);
                    }
                    } /> */}
                    <input type="text" className=" px-2 py-2 border flex-1"/>
                </div>
                <div className='flex flex-col md:flex-row px-2 py-1 xl:items-center'>
                    <span className='w-70'>Brand</span>
                    {/* <SearchableDropdown className=" px-2 py-2 border flex-1" options={ledgergroup} value={filter.ledgergroup} id='ledgerGroup' onChange={(val)=>{
                        const update = {...filter};
                        update.ledgergroup = val.target.value;
                        setfilter(update);
                    }
                    } /> */}
                    <input type="text" className=" px-2 py-2 border flex-1"/>
                </div>
                <div className='flex flex-col md:flex-row px-2 py-1 xl:items-center'>
                    <span className='w-70'>Tax Category</span>
                    <select
                      id="tax"
                      className="w-48 md:flex-1 border px-2 py-1"
                     
                    >
                      <option value="">Select Tax Category</option>
                      <option value="0%">0% (Exempted/Nil Rated)</option>
                      <option value="0.25%">0.25% GST</option>
                      <option value="3%">3% GST</option>
                      <option value="5%">5% GST</option>
                      <option value="12%">12% GST</option>
                      <option value="18%">18% GST</option>
                      <option value="28%">28% GST</option>
                    </select>
                </div>
                <div className='flex flex-col md:flex-row px-2 py-1 xl:items-center'>
                    <span className='w-70'>HSN</span>
                    {/* <SearchableDropdown className=" px-2 py-2 border flex-1" options={ledgergroup} value={filter.ledgergroup} id='ledgerGroup' onChange={(val)=>{
                        const update = {...filter};
                        update.ledgergroup = val.target.value;
                        setfilter(update);
                    }
                    } /> */}
                    <input type="text" className=" px-2 py-2 border flex-1"/>
                </div>
                <div className='flex flex-col md:flex-row px-2 py-1 xl:items-center'>
                    <span className='w-70'>Unit</span>
                    {/* <SearchableDropdown className=" px-2 py-2 border flex-1" options={ledgergroup} value={filter.ledgergroup} id='ledgerGroup' onChange={(val)=>{
                        const update = {...filter};
                        update.ledgergroup = val.target.value;
                        setfilter(update);
                    }
                    } /> */}
                    <input type="text" className=" px-2 py-2 border flex-1"/>
                </div>
                <div className='flex flex-col md:flex-row px-2 py-1 xl:items-center'>
                    <span className='w-70'>Batch Reqd</span>
                     <select className=" px-2 py-2 border flex-1">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className='flex flex-col md:flex-row px-2 py-1 xl:items-center'>
                    <span className='w-70'>Have Images</span>
                    <select className=" px-2 py-2 border flex-1">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className='flex flex-col md:flex-row px-2 py-1 xl:items-center'>
                    <span className='w-70'>Created Within Day</span>
                    {/* <SearchableDropdown className=" px-2 py-2 border flex-1" options={ledgergroup} value={filter.ledgergroup} id='ledgerGroup' onChange={(val)=>{
                        const update = {...filter};
                        update.ledgergroup = val.target.value;
                        setfilter(update);
                    }
                    } /> */}
                    <input type="text" className=" px-2 py-2 border flex-1"/>
                </div>
                <div className='flex flex-col md:flex-row px-2 py-1 xl:items-center'>
                    <span className='w-70'>Store Location</span>
                    {/* <SearchableDropdown className=" px-2 py-2 border flex-1" options={ledgergroup} value={filter.ledgergroup} id='ledgerGroup' onChange={(val)=>{
                        const update = {...filter};
                        update.ledgergroup = val.target.value;
                        setfilter(update);
                    }
                    } /> */}
                    <input type="text" className=" px-2 py-2 border flex-1"/>
                </div>
                <div className='flex flex-col md:flex-row px-2 py-1 xl:items-center'>
                    <span className='w-70'>Active Items</span>
                    <select className=" px-2 py-2 border flex-1">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                
                <div className="flex flex-col md:flex-row gap-2 my-10 md:justify-center">
              <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                Show
              </button>
              <button
                onClick={onClose}
                className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500"
              >
                Cancel
              </button>
            </div>
            </form>
        </div>
    </div>
  </div>
  )
}

export default Filteritem
