import React from 'react'

const PlayersDesc = () => {
  return (
    <div className='space-y-4 mt-10 sm:mt-0'>
            <div className="flex items-center">
                <span class="rounded-full bg-warning w-2.5 h-2.5"></span>
                <p className="ml-2 font-medium text-sm text-darkblack">Match ongoing</p>
            </div>
            <div className="flex items-center">
                <span class="rounded-full bg-neutral w-2.5 h-2.5"></span>
                <p className="ml-2 font-medium text-sm text-darkblack">loser of the match</p>
            </div>
            <div className="flex items-center">
                <span class="rounded-full bg-secondary700 w-2.5 h-2.5"></span>
                <p className="ml-2 font-medium text-sm text-darkblack">winner of the match</p>
            </div>
           
        </div>
  )
}

export default PlayersDesc
