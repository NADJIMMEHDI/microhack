import React from 'react';
import {UserInfos} from "C:/Users/Latitude/Desktop/sd/React-Tailwind-Templait/src/component/AdminProfile/data.jsx";

const Tableau = () => {{
    let i = 0;
   
    
    //    const ID = UserInfos.map((table) => table.ID);
    //    const Username = UserInfos.map((table) => table.Username);
    //    const Email = UserInfos.map((table) => table.Email);
    //    const Occupation = UserInfos.map((table) => table.Occupation);
    //     const Contact = UserInfos.map((table) => table.Contact);

       
    };
  return (
    <div> 
            <h1 className='text-black absolute mx-80 mt-12 font-bold text-2xl'>Employees</h1>
            <svg className='absolute right-24 top-14' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 17v-5.2c-.5.1-1 .2-1.5.2H17v6H7v-7c0-2.8 2.2-5 5-5c.1-1.3.7-2.4 1.5-3.3c-.3-.4-.9-.7-1.5-.7c-1.1 0-2 .9-2 2v.3C7 5.2 5 7.9 5 11v6l-2 2v1h18v-1l-2-2m-9 4c0 1.1.9 2 2 2s2-.9 2-2h-4M21 6.5c0 1.9-1.6 3.5-3.5 3.5S14 8.4 14 6.5S15.6 3 17.5 3S21 4.6 21 6.5"/></svg>
            <svg className='absolute inline right-36 top-14' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z"/></svg>
            <div>
                <div>
                    <div className=' w-52 h-10 bg-blue-900 absolute mt-20 top-20 left-80 rounded-md pl-4 pt-2'>
                    <svg className=' inline' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 5a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 12 12a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 5m0 2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 10a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 7M5.5 8A2.5 2.5 0 0 0 3 10.5c0 .94.53 1.75 1.29 2.18c.36.2.77.32 1.21.32c.44 0 .85-.12 1.21-.32c.37-.21.68-.51.91-.87A5.42 5.42 0 0 1 6.5 8.5v-.28c-.3-.14-.64-.22-1-.22m13 0c-.36 0-.7.08-1 .22v.28c0 1.2-.39 2.36-1.12 3.31c.12.19.25.34.4.49a2.482 2.482 0 0 0 1.72.7c.44 0 .85-.12 1.21-.32c.76-.43 1.29-1.24 1.29-2.18A2.5 2.5 0 0 0 18.5 8M12 14c-2.34 0-7 1.17-7 3.5V19h14v-1.5c0-2.33-4.66-3.5-7-3.5m-7.29.55C2.78 14.78 0 15.76 0 17.5V19h3v-1.93c0-1.01.69-1.85 1.71-2.52m14.58 0c1.02.67 1.71 1.51 1.71 2.52V19h3v-1.5c0-1.74-2.78-2.72-4.71-2.95M12 16c1.53 0 3.24.5 4.23 1H7.77c.99-.5 2.7-1 4.23-1Z"/></svg>
                    <h3 className='pl-4 inline text-white'>Total Employees</h3>
                    </div>
                    <div className='w-60 h-10 absolute mt-20 top-20 right-24 rounded-md pl-4 pt-2 cursor-pointer'>
                    <input type="text" className='bg-gray-100 w-52 h-10 inline rounded-md pl-4' placeholder='Search' />
                
                    <svg className='inline absolute mt-2 right-7' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="gray" d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/></svg>
                    </div>
                </div>
            </div>
           <div className='pb-14'>
            <table class="absolute table-auto border-10 mt-60 rounded-md bg-gray-100 left-80">
        <thead>
            <tr>
            <th className='py-14 px-10'>Profile</th>
            <th className='px-10'>ID</th>
            <th className='px-10 '>Username</th>
            <th className='px-10 '>E-mail</th>
            <th className='px-10 '>Occupation</th>
            <th className='px-10 '>Contact</th>
            </tr>
        </thead>
        <tbody >
            {UserInfos.map((UserInfos)=> {
                return(
                    <tr>
                        <td className='px-14 '>{UserInfos.Profile}</td>
                        <td className='px-14 '>{UserInfos.ID}</td>
                        <td className='px-14 text-center'>{UserInfos.Username}</td>
                        <td className='px-14 '>{UserInfos.Email}</td>
                        <td className='px-14 text-center'>{UserInfos.Occupation}</td>
                        <td className='px-14'>{UserInfos.Contact}</td>
                    </tr>
                )
            })}
            
            
        </tbody>
        </table>
        </div>
    </div>
  )
}

export default Tableau;