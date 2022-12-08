import { useState, useEffect } from "react";
import { db } from "./Firebase";
import { ref, onValue } from "firebase/database";
import Search from "./Search";

function Getter({active}) {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const query = ref(db, "/1leH85GY7zRQtyYVxRxjJANahPw6MjnEASokm1VRQZ-k/Sheet1"); 
            return onValue(query, (snapshot) => {
                const data = snapshot.val();
                setList(data)
                setIsLoading(false);
            });
        }
        try{
            getData();
        } catch (error) {
            console.log(error)
        }         
    },[]);


    function filter(list) {
        let params = active;
        console.log(params)

        if(params === "elders") {
            return list.filter(person => person.gender === "M");;
        }
        else if(params === "relief") {
            return list.filter(person => person.gender === "F");
        } else {
            return list;
        }
    }




    if(isLoading) {
        return (
            <>
                <h1 className="text-center">Loading...</h1>
            </>
        );
    } else {
        return (
            <>
                <Search list={filter(list)} />
            </>
        );
    }
}

export default Getter;