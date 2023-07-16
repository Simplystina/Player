import React,{useEffect, useState} from 'react'
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
const Home = () => {

    const data = [1,2,3,4]
    // Function to remove comments from the content
   
  const [players, setPlayers] = useState([])
  const [round, setRound] = useState(1)
  const [nextRound, setNextRound] = useState(2)
  const [loading, setLoading] = useState(false)
    useEffect(() => {
            setLoading(true)
            const fetchGistData = ()=>{
            fetch('https://gist.githubusercontent.com/Auwalms/0c4acdc6374c5d7a1c63371c41846bc3/raw/7c571314cc4b2e2960a6538d38c202399f43caca/matches.js')
            .then(response => response.text())
            .then(data => {
            const lines = data.split('\n');
            const remainingLines = lines.slice(3);
            const modifiedDataString = remainingLines.join('\n');
            const allplayers = JSON.parse(modifiedDataString);

            const currentRound = allplayers.filter((item)=>{return item.round===round})
            console.log(currentRound)
            setPlayers(currentRound)
            setLoading(false)
    
        }).catch(error => {
            setLoading(false)
           console.log('Error:', error);
         });
    }
       fetchGistData();
       
    }, [round]);

      const moveNextRound = ()=>{
         if(round >= 3){
            setRound(1)
            setNextRound(2)
            return
         }
         setRound(round +1)
         setNextRound(nextRound +1)
         if(nextRound >=4){
            setNextRound(1)
         }
       
      }
      const movePrevRound = ()=>{
        console.log(round, "round",nextRound," PrevRound") 
        if(round === 1){
            setRound(3)
            setNextRound(1)
            return
        }
        setRound(round-1)
        if(nextRound === 1){
            setNextRound(3)
            return
        }
        setNextRound(nextRound-1)
    
     }

     const handleButton = ()=>{

     }
//back 1 2 3 forward
  return (
    <div className=" bg-white rounded-[20px] m-2 sm:m-10 p-2 sm:p-5">
       <div className="flex justify-between" >
         <p className="font-medium text-sm sm:text-md">Round {round}</p>
         <div className='flex justify-between items-center space-x-3 sm:space-x-6'>
            <span className='text-neutral text-sm sm:text-lg' onClick={movePrevRound}><IoIosArrowBack/></span>
            <span className={
                round===1? 
                'bg-secondary w-[20px] md:w-[30px]  h-[20px] md:h-[30px] flex items-center justify-center rounded-[3px] text-sm sm:text-lg text-white cursor-grab'
                : nextRound ===1? 'text-darkblack text-sm sm:text-lg font-medium cursor-grab'
                :'text-neutral text-sm sm:text-lg font-normal cursor-grab'
            } onClick={()=>{
                setRound(1);
                setNextRound(2)
            }} >1</span>
            <span className={
                round===2? 
                'bg-secondary w-[30px] h-[30px] flex items-center justify-center rounded-[3px] text-sm sm:text-lg text-white cursor-grab'
                : nextRound ===2? 'text-darkblack text-sm sm:text-lg font-medium cursor-grab'
                :'text-neutral text-sm sm:text-lg font-normal cursor-grab'
            } 
            onClick={()=>{
                setRound(2);
                setNextRound(3)
            }}>2</span>
            <span className={
                round===3? 
                'bg-secondary w-[30px] h-[30px] flex items-center justify-center rounded-[3px] text-sm sm:text-lg text-white cursor-grab'
                : nextRound ===3? 'text-darkblack text-sm sm:text-lg font-medium cursor-grab'
                :'text-neutral text-sm sm:text-lg font-normal cursor-grab'
            } onClick={()=>{
                setRound(3);
                setNextRound(1)
            }}>3</span>
            <span className='text-neutral text-sm sm:text-lg  font-normal' onClick={moveNextRound}><IoIosArrowForward/></span>
         </div>
       </div>
       {
       loading ? 
       (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-secondary"></div>
        </div>
        ) 
        :
        <div className='flex flex-col-reverse sm:flex-row justify-between sm:p-5 md:p-7 md:w-5/6'>
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
            </div>
          
                )
            })
           }
      </div>
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
       </div>
      }

      <div class="flex justify-center items-center py-20">
         <button class="bg-secondary text-xs xsm:text-sm font-semibold rounded-[16px] px-[44px] py-[14px] w-[422px] text-white" onClick={round === 3? ()=>setRound(1) : ()=>setRound(round +1)}>Proceed to Round {round===3? 1 : round+1 }</button>
      </div>

    </div>
    
  )
}

export default Home
