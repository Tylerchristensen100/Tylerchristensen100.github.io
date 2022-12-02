import {useState} from 'react';

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
    };
    




    return (
        <li key="{item.id}">
           {item.first_name} {item.last_name} | 
           {dates.map((date, index) => {
             return <input id={date} className="checkbox" type="checkbox" checked={item.Attendance.Dec4_22}  onChange={() => handleCheck(index)}/>
           }) }
        </li>
    );
}
export default ListItem;