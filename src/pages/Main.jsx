import React, { useState, useEffect } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import axios from 'axios'

const Main = () => {

  const [shortenLink, setShortenLink] = useState('')
  const [alertShown, setAlertShown] = useState(false);
  const [inputValue, setInputValue] = useState('')
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (alertShown) {
      const timeout = setTimeout(() => {
        setAlertShown(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [alertShown]);

  const handleValue = () => {
    setInputValue(value)
    setValue('')
  }

  const dataFetching = async () => {

    try{
      setIsLoading(true)
      const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
      setShortenLink(res.data.result.full_short_link)
    } catch(err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if(inputValue.length) {
      dataFetching()
    }
  }, [inputValue])
  
  return (
    <div className='max-w-7xl mx-auto h-screen flex justify-center items-center bg-[#343541] text-white'>

      

        <div className='main-container w-11/12 md:w-10/12 lg:w-6/12 xl:w-2/5'>


            <div className='title text-center py-4 font-main'>
              <h1 className='text-4xl '>URL SHORTENER</h1>
              <p className='text-base'>Paste the url to be shortened </p>
            </div>

                <div className='forms grid grid-cols-1 justify-items-center w-full '>

                    <div className=' w-full'>
                    <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className='bg-[#40414F] w-full p-3 rounded-lg outline-none font-url text-sm'
                    placeholder='Paste a link here'
                    >
                    </input>
                    </div>

                    <div className='w-full '>
                    <button
                    onClick={handleValue}
                    className='p-2 bg-[#6A2E35] w-full rounded-md mt-2 font-btn text-sm uppercase hover:opacity-75'
                    >
                      Shorten URL
                    </button> 
                    </div>

                </div>

               {isLoading ? ( <p className='text-center my-2'>loading...</p>) : ( 
                <>
              {shortenLink && (
                <div className='copy-clipboard pt-3  '>

                  <div className='border-t border-white grid grid-col-1 justify-items-center'>

                  <div className='pt-4 w-full'>
                  <p className='font-url border p-2 rounded-md border-[#4D4D4F] text-sm'>{shortenLink}</p>
                  </div>

                  <div className='mt-2 w-full'>

                  <CopyToClipboard
                   text={shortenLink}>
                  <button
                  onClick={() => setAlertShown(true)}
                  className='w-full bg-[#E3B505] p-2 rounded-md uppercase font-btn text-sm hover:opacity-75'
                  >
                    Copy url
                  </button>
                  </CopyToClipboard>
                  {alertShown && <p className='text-green-500 text-center mt-3 font-main text-lg'>Succesfully copied</p>}
                  </div>
                  </div>

                </div>
                )}
                </>
                )}


        </div>


    </div>
  )
}

export default Main