import { useState, useEffect } from "react";
import { db } from "./Firebase";
import { ref, onValue } from "firebase/database";
import Table from "./Table";



function Search() {
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




    const [searchField, setSearchField] = useState("");

    const filteredPersons = list.filter(person => {
        return(
            person.first_name.toLowerCase().includes(searchField.toLowerCase()) ||
            person.last_name.toLowerCase().includes(searchField.toLowerCase())
        )
    })

    const handleChange = e => {
        setSearchField(e.target.value);
    }


    if(isLoading) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        );
    } else {
        return (
            <>
            <div className="container">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-8">
                    <div className="input-group mb-3 mt-5">
                        <input className="input search" type="search" placeholder="Search for a name"  onChange={handleChange} />
                    </div>
                    <div>

                        <Table list={filteredPersons} origAttendance={list[0].Attendance} />
                    </div>

                    </div>
                </div>
            </div>
           
                
            </>
        );
    }
}
export default Search;