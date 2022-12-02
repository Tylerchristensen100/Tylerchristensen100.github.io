import { ref, set } from 'firebase/database';
import {useState} from 'react';
import { db } from "./Firebase";



const Push = (user, dates,  data) => {
    
    let datesObject = {};
    for (let i = 0; i < dates.length; i++) {
        datesObject[dates[i]] = data[i];
    }

    const newUser = {
        "id": user.id,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "attendance": datesObject
    }
    console.log(newUser)
    // set(ref(db, `/1leH85GY7zRQtyYVxRxjJANahPw6MjnEASokm1VRQZ-k/Sheet1/${user.id}`), newUser);
    
}

function ListItem(data) {
    const item = data.data;
    const dates = Object.keys(item.Attendance)
    
    const [isChecked, setIsChecked] = useState(new Array(dates.length).fill(false));

    const handleCheck = (position) => {
        const updatedIsChecked = isChecked.map((item, index) => {
            if (index === position) {
                return !item;
            } else {
                return item;
            }
        });
        setIsChecked(updatedIsChecked);
        Push(item, dates, updatedIsChecked);
    };
    
    const isAttended = (date) =>{
        return item.Attendance[date];
    }



    return (
        <tr key="{item.id}">
           <td className="name">{item.first_name}</td>
           <td className="name">{item.last_name}</td>
            |
            <td className="attendance">
           {dates.map((date, index) => {
             return <input id={date} className="checkbox" type="checkbox" checked={isAttended(date)}  onChange={() => handleCheck(index)}/>
           }) }
           </td>
        </tr>
    );
}
export default ListItem;