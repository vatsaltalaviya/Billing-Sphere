import React, { useRef, useState } from 'react'
import PopUp from '../../components/PopUp'

const AttachImage = ({onClose}) => {
    const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click(); // ✅ opens file explorer
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl); // ✅ preview image
    }
  };

  return (
     <PopUp onClose={onClose}>
      <div className="md:w-[500px] border bg-white flex flex-col">
        <div className="bg-blue-600 flex justify-center text-white">
          <h1>Images</h1>
        </div>
        <form action="" className='p-2'>
          <div className="flex flex-col px-2">
             <div className="space-y-4">
               
                {/* HSN Code + Tax Category */}
                <div className="flex items-center gap-4">
                  <div className="h-52 w-52">
                    <img
                      src={preview}
                      alt=""
                      className="h-full w-full object-cover"

                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-42 font-medium text-sm">
                      <button type='button' onClick={handleButtonClick} className="w-full py-0.5 rounded border border-amber-500 bg-amber-300">
                        Add
                      </button>
                      <input type="file" accept='image/*' ref={inputRef} style={{display:'none'}} onChange={handleFileChange} />
                    </div>
                    <div className="w-42 font-medium text-sm">
                      <button onClick={()=>setPreview(null)} className="w-full py-0.5 rounded border border-amber-500 bg-amber-300">
                        Delete
                      </button>
                    </div>
                    <div className="w-42 font-medium text-sm">
                      <button className="w-full py-0.5 rounded border border-amber-500 bg-amber-300">
                        Next
                      </button>
                    </div>
                    <div className="w-42 font-medium text-sm">
                      <button className="w-full py-0.5 rounded border border-amber-500 bg-amber-300">
                        Previous
                      </button>
                    </div>
                    <div className="w-42 font-medium text-sm">
                      <button className="w-full py-0.5 rounded border border-amber-500 bg-amber-300">
                        Zoom
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            <div className="flex flex-col md:flex-row gap-2 py-2 xl:ml-5 items-center ">
              <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                Save
              </button>
              <button
                onClick={onClose}
                className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500"
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </PopUp>
  )
}

export default AttachImage
