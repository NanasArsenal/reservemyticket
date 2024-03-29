import React from 'react'
import NowShowing from '@/components/nowShowing'

const showing = () => {
  return ( <main
    className={` p-10 h-full } `}
  >
    <div className=' w-full h-full'>
        <h2 className='font-bold text-xl font-roboto'>NOW SHOWING</h2>
              <NowShowing/>
   </div>
  </main>

  )
}

export default showing