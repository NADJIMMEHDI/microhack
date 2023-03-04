import React, {useState}  from "react";

export default function SideBar(){
    const [clickable, setClickable] = useState(false)
    const [status, setStatus]= useState(false)
    

    const handleclick = () =>{
        if (status == true) {
            setClickable1(false);
            setClickable2(false);
            setClickable3(false);
            setClickable4(false);
            setClickable5(false);
        }
        setClickable(true)
        setStatus(true)
    }

    const [clickable1, setClickable1] = useState(false)

    const handleclick1 = () =>{
        if (status == true) {
            setClickable(false);
            setClickable2(false);
            setClickable3(false);
            setClickable4(false);
            setClickable5(false);
        }
        setClickable1(true)
        setStatus(true)
        
    }

    const [clickable2, setClickable2] = useState(false)

    const handleclick2 = () =>{
        if (status == true) {
            setClickable(false);
            setClickable1(false);
            setClickable3(false);
            setClickable4(false);
            setClickable5(false);
        }
        setClickable2(true)
        setStatus(true)
        
}

    const [clickable3, setClickable3] = useState(false)

    const handleclick3 = () =>{
        if (status == true) {
            setClickable(false);
            setClickable2(false);
            setClickable1(false);
            setClickable4(false);
            setClickable5(false);
        }
        setClickable3(true)
        setStatus(true)
        
    }

    const [clickable4, setClickable4] = useState(false)

    const handleclick4 = () =>{
        if (status == true) {
            setClickable(false);
            setClickable2(false);
            setClickable3(false);
            setClickable1(false);
            setClickable5(false);
        }
        setClickable4(true)
        setStatus(true)
        
}

    const [clickable5, setClickable5] = useState(false)

    const handleclick5 = () =>{
        if (status == true) {
            setClickable(false);
            setClickable2(false);
            setClickable3(false);
            setClickable4(false);
            setClickable1(false);
        }
        setClickable5(true)
        setStatus(true)
    }

    return(
        <div className="bg-gradient-to-t from-black to-blue-900 h-screen absolute w-60 text-white">
            <h1 className="text-4xl text-left flex flex-1 flex-col pt-10 pl-6 font-bold ">My Menu</h1>
            <div className= { clickable ? 'translate-x-10 text-cyan-500 flex mb-6 mt-20' : 'flex mb-6 mt-20'}  onClick={handleclick} >
                <svg className="mx-6" xmlns="http://www.w3.org/2000/svg" width="23" height="25.16" viewBox="0 0 24 24"><path fill={ clickable ? '#5AE1F8' : 'white'} d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z"/></svg>
           <a href="./AdminProfile" className="flex">Home</a>
           </div>
           <div className= { clickable1 ? 'translate-x-10 text-cyan-500 flex my-6' : 'flex my-6'}  onClick={handleclick1}>
           <svg className="mx-6" xmlns="http://www.w3.org/2000/svg" width="23" height="25.16" viewBox="0 0 20 20"><path fill={ clickable1 ? '#5AE1F8' : 'white'} d="M5.453 4.167a.726.726 0 0 0-1.027-.01A8.225 8.225 0 0 0 2 10a8.228 8.228 0 0 0 2.604 6.015a.725.725 0 0 0 1.01-.025c.316-.316.277-.819-.027-1.11A6.73 6.73 0 0 1 3.5 10c0-1.846.741-3.52 1.943-4.738c.29-.295.32-.785.01-1.095ZM7.214 5.93a.714.714 0 0 0-1.008-.016A5.733 5.733 0 0 0 4.5 10a5.73 5.73 0 0 0 1.893 4.264a.713.713 0 0 0 .983-.037c.328-.328.267-.844-.041-1.134A4.237 4.237 0 0 1 6 10c0-1.15.457-2.194 1.2-2.96c.286-.294.333-.793.014-1.111Zm5.572 0a.714.714 0 0 1 1.008-.016A5.733 5.733 0 0 1 15.5 10a5.73 5.73 0 0 1-1.893 4.264a.713.713 0 0 1-.983-.037c-.328-.328-.267-.844.041-1.134A4.237 4.237 0 0 0 14 10c0-1.15-.457-2.194-1.2-2.96c-.286-.294-.333-.793-.014-1.111Zm1.761-1.762a.726.726 0 0 1 1.027-.01A8.225 8.225 0 0 1 18 10a8.228 8.228 0 0 1-2.604 6.015a.725.725 0 0 1-1.01-.025c-.316-.316-.277-.819.028-1.11A6.73 6.73 0 0 0 16.5 10c0-1.846-.741-3.52-1.943-4.738c-.29-.295-.32-.785-.01-1.095ZM10 8.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z"/></svg>
            <a href="#" className="flex">Live Feed</a>
            </div>
           <div className= { clickable2 ? 'translate-x-10 text-cyan-500 flex my-6' : 'flex my-6'}  onClick={handleclick2}>
           <svg className="mx-6"  xmlns="http://www.w3.org/2000/svg" width="23" height="25.16" viewBox="0 0 24 24"><path fill={ clickable2 ? '#5AE1F8' : 'white'} d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11Z"/></svg>
            <a href="../../Employees" className="flex">Employees</a>
            </div>
           <div className= { clickable3 ? 'translate-x-10 text-cyan-500 flex my-6' : 'flex my-6'}  onClick={handleclick3}>
           <svg className="mx-6" xmlns="http://www.w3.org/2000/svg" width="23" height="25.16" viewBox="0 0 24 24"><path fill={ clickable3 ? '#5AE1F8' : 'white'} d="m9.25 22l-.4-3.2q-.325-.125-.613-.3t-.562-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2h-5.5Zm2.8-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.012 2.475T12.05 15.5Z"/></svg>
            <a href="#" className="flex">Settings</a>
            </div>
           <div className= { clickable4 ? 'translate-x-10 text-cyan-500 flex my-6' : 'flex my-6'}  onClick={handleclick4}>
           <svg className="mx-6"  xmlns="http://www.w3.org/2000/svg" width="23" height="25.16" viewBox="0 0 24 24"><path fill={ clickable4 ? '#5AE1F8' : 'white'} d="M21 21H3v-2h18v2zM8 10H4v7h4v-7zm6-7h-4v14h4V3zm6 3h-4v11h4V6z"/></svg>
            <a href="#" className="flex">Statistics</a>
            </div>
           <div className= { clickable5 ? 'translate-x-10 text-cyan-500 flex my-6' : 'flex my-6'}  onClick={handleclick5}>
           <svg className="mx-6" xmlns="http://www.w3.org/2000/svg" width="23" height="25.16" viewBox="0 0 24 24"><path fill={ clickable5 ? '#5AE1F8' : 'white'} d="M15.325 16.275q-.275-.325-.275-.737t.275-.688l1.85-1.85H10q-.425 0-.713-.288T9 12q0-.425.288-.713T10 11h7.175l-1.85-1.85q-.3-.3-.3-.713t.3-.712q.275-.3.688-.3t.687.275l3.6 3.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-3.6 3.6q-.325.325-.713.288t-.662-.313ZM5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h6q.425 0 .713.288T12 4q0 .425-.288.713T11 5H5v14h6q.425 0 .713.288T12 20q0 .425-.288.713T11 21H5Z"/></svg>
            <a href="#" className="flex">Logout</a>
            </div>
        </div>
    ) ;
}


