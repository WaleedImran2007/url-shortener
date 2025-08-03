"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'

const Shorten = () => {

    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")
    const [savedurls, setsavedurls] = useState([])

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            url: url,
            shorturl: shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                    seturl("")
                    setshorturl("")
                    toast.success(result.message)
                } else {
                    toast.error(result.message)
                }
                console.log(result)
            })
            .catch((error) => {
                console.error(error)
                toast.error("Something went wrong!")
            });
    }

    return (
        <div className='bg-gradient-to-br from-indigo-900 via-purple-900 to-black min-h-[90.3vh] flex justify-center items-center py-0 px-4'>
            <div className='w-full max-w-2xl p-6 rounded-xl mt-10 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg sm:flex-col'>
                <div className='hover:scale-105 transition-all duration-200 ease-in-out hover:pb-1 text-center '>
                    <span className='font-extrabold text-2xl sm:text-3xl text-gray-300'>Generate Your Short</span>
                    <span className='font-extrabold text-2xl sm:text-3xl text-gray-300'> URLs</span>
                </div>
                <div className='flex flex-col gap-4 mt-6'>
                    <input
                        className='bg-white p-3 rounded-lg hover:-mx-2 transition-all duration-200 ease-in-out text-sm sm:text-base'
                        value={url}
                        type="text"
                        placeholder='Enter your URL'
                        onChange={e => { seturl(e.target.value) }}
                    />
                    <input
                        className='bg-white p-3 rounded-lg hover:-mx-2 transition-all duration-200 ease-in-out text-sm sm:text-base'
                        value={shorturl}
                        type="text"
                        placeholder='Enter your preferred short URL text'
                        onChange={e => { setshorturl(e.target.value) }}
                    />
                    <button
                        onClick={generate}
                        className='bg-purple-500 py-2 rounded-lg text-white font-bold cursor-pointer hover:-mx-2 hover:bg-purple-600 transition-all duration-200 ease-in-out'
                    >
                        Generate Short Link
                    </button>
                </div>

                {generated && (
                    <div className='mt-6 break-words'>
                        <div className='font-bold text-white mb-2'>Your short URL is:</div>
                        <Link className='underline text-blue-300' target='_blank' href={generated}>{generated}</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Shorten;
