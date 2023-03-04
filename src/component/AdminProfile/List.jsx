import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import { UserData } from "./data";
import LineChart from "./LineChart";


const List = () => {
    useEffect(() => {
        const url = "http://192.168.43.94:5000/employees/all"
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setUsertData(() => ({

                    labels: res.data.map((data) => data.firstName),
                    datasets: [{
                        label: "Worked Hours",
                        data: res.data.map((data) => data.WorkHours),

                    },],
                }))
                //  console.log(res.data)
            })
    }, [])
    const [userData, setUsertData] = useState({

        labels: UserData.map((data) => data.firstName),
        datasets: [{
            label: "Worked Hours",
            data: UserData.map((data) => data.WorkHours),

        },],
    });
    return (
        <div>
            <h1 className="text-black relative h-100 ml-80 pt-10 text-4xl font-bold"> Welcome Back <span className="text-cyan-500">Mohammed</span></h1>
            <div className="ml-80 mt-20 grid gap-x-8 gap-y-4 grid-cols-3 mr-10">
                <div className=" rounded text-center"><img src="../../assets/card 5.png" alt="stats" /></div>
                <div className=" rounded text-center"><img src="../../assets/card 5.png" alt="stats" /></div>
                <div className=" rounded text-center"><img src="../../assets/card 5.png" alt="stats" /></div>
            </div>
            <div className="ml-80 flex space-x-20">
                {/* <div><img className="w-25 h-90 ml-80 " src="../../assets/card 1.png" alt="stats" />
                    </div> */}
                <div className="" ><LineChart chartData={userData} /></div>
                <div className="w-100 h-100 mt-20"><img src="../../assets/card 8.png" alt="stats" /></div>
            </div>


        </div>
    );
}
export default List;