import { useState,useEffect } from 'react';
import { db } from "./Firebase";
import { ref, onValue } from "firebase/database";

import ListItem from "./ListItem";

function Table() {
    const [list, setList] = useState([]);


    useEffect(() => {
        const getData = async () => {
            const query = ref(db, "/1leH85GY7zRQtyYVxRxjJANahPw6MjnEASokm1VRQZ-k/Sheet1"); 
            return onValue(query, (snapshot) => {
                const data = snapshot.val();
                setList(data)
                });
        } 

        try{
            getData();
        } catch (error) {
            console.log(error)
        }         
    },[]);

    function getDateObject(date) {
        const monthTranslation = {"jan": 1, "feb": 2, "mar": 3, "apr": 4, "may": 5, "jun": 6, "jul": 7, "aug": 8, "sep": 9, "oct": 10, "nov": 11, "dec": 12}
        let rawMonth = date.slice(0,3).toLowerCase();
        let rawDay = date.slice(3,9).split('_')[0];
        let rawYear = "20" + date.split("_")[1];
        console.log(rawYear)
        let dateObject = new Date(rawYear, monthTranslation[rawMonth]-1, rawDay);
        console.log(dateObject)
        return dateObject;
    }

    function getDateList(dates) {
        const rawDates =  Object.keys(dates);
        const dateMonthTranslation = {"0": "Jan", "1": "Feb", "2": "Mar", "3": "Apr", "4": "May", "5": "Jun", "6": "Jul", "7": "Aug", "8": "Sep", "9": "Oct", "10": "Nov", "11": "Dec"}
        let dateList = [];
        for(let i = 0; i < rawDates.length; i++) {
            dateList.push(getDateObject(rawDates[i]));
        }
        console.log(dateList)
        return (
            <>
                {dateList.map((date) => <span className="dateLabel">{String(dateMonthTranslation[date.getMonth()] + " " +  date.getDate())}</span>)}
            </>  
        )
    }

    return (
        <>
            <tbody className="unstyled">
                <tr className="table-head">
                    <td className="name">First Name</td>
                    <td className="name">Last Name</td>
                    |
                    <td className="attendance">{getDateList(list[0].Attendance)}</td>
                </tr>

                
                {list.map((item) =>  <ListItem key={item.id} data={item} />)}
            </tbody>
        </>
    );
};

export default Table;