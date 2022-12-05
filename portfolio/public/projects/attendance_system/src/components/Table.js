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

    return (
        <>
            <tbody className="unstyled">
                <tr className="table-head">
                    <td className="name">First Name</td>
                    <td className="name">Last Name</td>
                    |
                    <td className="attendance">Attendance</td>
                </tr>

                
                {list.map((item) =>  <ListItem key={item.id} data={item} />)}
            </tbody>
        </>
    );
};

export default Table;