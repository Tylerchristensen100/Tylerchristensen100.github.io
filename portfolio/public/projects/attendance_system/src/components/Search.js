import { useState } from "react";
import Table from "./Table";



function Search({list}) {
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

    return (
        <>
            <div className="">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="">
                    <div className="input-group mb-3 mt-4 col-8">
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
export default Search;