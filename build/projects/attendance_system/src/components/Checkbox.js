import { db } from "./Firebase";
import { ref, set } from 'firebase/database';
import { useState } from 'react';


const Push = (item, date, isChecked) => {
    item.Attendance[date] = isChecked;
    set(ref(db, `/1leH85GY7zRQtyYVxRxjJANahPw6MjnEASokm1VRQZ-k/Sheet1/${item.id}/Attendance/${date}`), isChecked );
}

function Checkbox({ key, date, attended, item, attendance}) {
    const [isChecked, setChecked] = useState(attended);


    function toggleCheckboxChange() {
        setChecked((prev) => !prev)
        Push(item, date, !isChecked, attendance);
    }

    return(
        <>
            <input id={key}  className="checkbox" type="checkbox" checked={isChecked} onChange={() => toggleCheckboxChange()} />
        </>
    )

}
export default Checkbox;