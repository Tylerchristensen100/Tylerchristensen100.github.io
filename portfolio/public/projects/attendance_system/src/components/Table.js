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
            <ul>
                {list.map((item) =>  <ListItem key={item.id} data={item}/>)}
            </ul>
        </>
    );
};

export default Table;