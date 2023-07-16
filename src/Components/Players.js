import React from 'react'
import Score from './Score'
const Players = ({players}) => {
  return (
    <div className='grid grid-cols-1 xsm:grid-cols-2 gap-6 md:w-3/4 lg:w-2/4 mt-10 sm:mt-0'>
           {
            players.map((item)=>{
                
                return(
             <div key={item._id} className="flex flex-col rounded-[5px] ">
               <div className="flex flex-row rounded-t-[5px] border-t-2 border-r-2 border-l-2 border-[#CFCFCF]-500">
                    <span  className={
                        item?.challenged?._id === item?.winner?._id ?
                      'rounded-tl-[5px] bg-secondary700  p-2 w-1/5 flex items-center justify-center text-lg text-white'
                :
                   'rounded-tl-[5px] bg-neutral p-2 w-1/5 flex items-center justify-center text-lg text-white' }>
                        <span className='ml-auto'>1</span>
                    </span>
                    <span className='rounded-tr-[5px] bg-white w-4/5 p-2 text-sm text-darkblack font-medium flex items-center'>      
                         {(item?.challenged?.firstname || 'dinma') + ' ' + (item?.challenged?.lastname || 'nwa') }
                    </span>
                </div>
                <div className="rounded-b-[5px] flex flex-row border-2 border-[#CFCFCF]-500">
                    <span className={
                        item?.challenger?._id === item?.winner?._id?
                      'rounded-bl-[5px] bg-secondary700 p-2 w-1/5 flex items-center justify-center text-lg text-white'
                :
                   'rounded-br-[5px] bg-neutral p-2 w-1/5 flex items-center justify-center text-lg text-white' }>
                      <span className='ml-auto'>2</span>
                    </span>
                    <span className='rounded-br-[5px] bg-white w-4/5 p-2 text-sm text-darkblack font-medium flex items-center'>{(item?.challenger?.firstname || 'dinma') + ' ' + (item?.challenger?.lastname || 'nwa') }</span>
                </div>
                <Score players={item}/>
            </div>
            
          
                )
            })
           }
      </div>
  )
}

export default Players
