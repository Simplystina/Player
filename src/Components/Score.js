import React from 'react'

const Score = ({players}) => {
  return (
  <div className="space-y-2 shadow-black">
    <div className='mt-5'>
       <p className='text-xs font-semimedium text-secondary700'>Set A</p>
      <div className='flex justify-between' >
       <div className="flex items-center">
         <span class="rounded-full bg-secondary700 w-2.5 h-2.5"></span>
         
           <p className='ml-2 text-warning font-black italic'>{players?.setA?.challenger}</p>
        </div>
        <div className="flex items-center">
           <span class="rounded-full bg-neutral w-2.5 h-2.5"></span>
           <p className='ml-2 text-warning font-black italic'>{players?.setA?.challenged}</p>
        </div>
       </div>
    </div>
    <div>
       <p className='text-xs font-semimedium text-secondary700'>Set B</p>
      <div className='flex items-center justify-between'>
       <div className="flex items-center">
         <span class="rounded-full bg-secondary700 w-2.5 h-2.5"></span>
           
           <p className='ml-2 text-warning font-black italic'>{players?.setB?.challenger}</p>
        </div>
        <div className="flex items-center">
           <span class="rounded-full bg-neutral w-2.5 h-2.5"></span>
          
           <p className='ml-2 text-warning font-black italic'>{players?.setB?.challenged}</p>
        </div>
       </div>
    </div>
    <div>
       <p className='text-xs font-semimedium text-secondary700'>Set C</p>
      <div className='flex items-center justify-between'>
       <div className="flex items-center">
         <span class="rounded-full bg-secondary700 w-2.5 h-2.5"></span>
           <p className='ml-2 text-warning font-black italic'>{players?.setC?.challenger}</p>
        </div>
        <div className="flex items-center">
           <span class="rounded-full bg-neutral w-2.5 h-2.5"></span>
           <p className='ml-2 text-warning font-black italic'>{players?.setC?.challenged}</p>
        </div>
       </div>
    </div>
</div>

  )
}

export default Score
