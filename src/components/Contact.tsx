import React from 'react'
import { MdMarkEmailUnread } from "react-icons/md";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl'>Contact Us</h2>
          <p className='text-gray-600 test-[18px] pt-2'>
              contact me through call , message and Email.
          </p>
          <div className='flex gap-3 items-center'>
            <MdMarkEmailUnread size={30}/> Zeeshan.Tariq91@live.com
            </div>
            <div className='flex gap-3 items-center'>
            <BsFillTelephoneInboundFill /> 0336-2205387
            </div>
        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1'>
            <label htmlFor='name'>Name</label>
            <input type="text"
            className='h-[40px] bg-transparent border border-accent'
            id='name'/>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='name'>Emai</label>
            <input type="text"
            className='h-[40px] bg-transparent border border-accent'
            id='email'/>
            </div>
            <div className='flex flex-col gap-1'>
            <label htmlFor='msg'>Message</label>
            <textarea
            className='bg-transparent border border-accent'
            id='msg' rows={8}>
            </textarea>
          </div>
          <button className='bg-accent p-2 px-6'>Send</button>
          </div>
      </div>
     </div>
  )
}

export default Contact
