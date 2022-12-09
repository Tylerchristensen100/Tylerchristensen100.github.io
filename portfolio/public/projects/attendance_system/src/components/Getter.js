import { useState, useEffect } from "react";
import { db } from "./Firebase";
import { ref, onValue } from "firebase/database";
import { TailSpin } from "react-loader-spinner"
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
                <div className="loading-indicator">
                <TailSpin
                    height="80"
                    width="80"
                    color="#a3a3a3"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
/>
                </div>
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