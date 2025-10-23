import { useState } from "react";
import { db } from "./Firebase";
import { ref, set,remove  } from 'firebase/database';

function DeletePerson({list}) {
    const origList = list;

    const [searchField, setSearchField] = useState("");

    function deleteFromFirebase(list) {
        let reference = ref(db, `/1leH85GY7zRQtyYVxRxjJANahPw6MjnEASokm1VRQZ-k/Sheet1/`)
        remove(reference)
        set(reference, list)
        alert("Record Deleted")
    }


    function deleteRecord(id) {
        console.log(origList)
        let cleanedList = origList.filter(item => item.id !== id)
        for(let i = 0; i < cleanedList.length; i++) {
            cleanedList[i].id = i;
        }
       

        deleteFromFirebase(cleanedList)
    }

    function getPerson(id)  {
        deleteRecord(id)
    }

    

    const filteredPersons = list.filter(person => {
        return(
            person.first_name.toLowerCase().includes(searchField.toLowerCase()) ||
            person.last_name.toLowerCase().includes(searchField.toLowerCase())
        )
    })
    const handleChange = e => {
        setSearchField(e.target.value);
    }


    return(
        <>
            <div className="pt-4">
                <h3>Delete User</h3>
                <div className="input-group mb-3 mt-4 col-8">
                    <input className="input search" type="search" placeholder="Search for a name"  onChange={handleChange} />
                </div>
                
                    <table>
                        <tbody className="">
                            <tr className="table-head">
                                <td className="name">First Name</td>
                                <td className="name border-right">Last Name</td>
                            </tr>


                            {filteredPersons.map((item) =>  <tr key={item.id} id={item.id}>
                                <td>{item.first_name}</td><td>{item.last_name}</td>
                                <td><button className="btn btn-danger" onClick={() => {getPerson(item.id)}}>Delete</button></td>
                                </tr>)}
                        </tbody>
                    </table>
    </div>
        </>
    );
}
export default DeletePerson;