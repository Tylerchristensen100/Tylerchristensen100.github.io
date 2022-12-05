import { db } from "./Firebase";
import { ref, set, update } from 'firebase/database';
import { useState,useEffect } from 'react';


const Push = (item, date, isChecked) => {
    item.Attendance[date] = isChecked;
    set(ref(db, `/1leH85GY7zRQtyYVxRxjJANahPw6MjnEASokm1VRQZ-k/Sheet1/${item.id}`), item);
}

function Checkbox({ key, date, attended, item}) {
    const [isChecked, setChecked] = useState(attended);


    function toggleCheckboxChange() {
        setChecked((prev) => !prev)
        Push(item, date, !isChecked)
    }

    return(
        <>
            <input id={key}  className="checkbox" type="checkbox" checked={isChecked} onChange={() => toggleCheckboxChange()} />
        </>
    )

}
export default Checkbox;