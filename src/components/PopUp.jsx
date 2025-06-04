import React, { useRef } from 'react'

const PopUp = ({children,onClose}) => {
  const BackGroundRef = useRef()
  const closePopUp = (e) => {
    if (BackGroundRef.current === e.target) {    
      onClose();
    }
  }
  return (
    <div ref={BackGroundRef} onClick={closePopUp} className="fixed inset-0 bg-opacity-10 backdrop-blur-sm flex items-center justify-center">
      <div className="mt-10 flex flex-col gap-5">
        {children}
      </div>
    </div>
  )
}

export default PopUp
