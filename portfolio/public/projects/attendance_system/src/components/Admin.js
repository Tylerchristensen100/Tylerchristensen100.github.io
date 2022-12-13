import { db } from "./Firebase";
import { ref, set  } from 'firebase/database';

function Admin({list}) {
    const origList = list;

    const Push = (newPerson) => {
        let refrence = ref(db, `/1leH85GY7zRQtyYVxRxjJANahPw6MjnEASokm1VRQZ-k/Sheet1/${newPerson.id}`)
        set(refrence, newPerson)
        alert(`${newPerson.first_name} is added!`)
    }

    function handleSubmit(e) {
        e.preventDefault();
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let gender = document.querySelector(".radio:checked").value;
        

        let datesList = Object.keys(origList[0].Attendance);
        let newAttendance = {};
        for(let i = 0; i < datesList.length; i++) {
            newAttendance[datesList[i]] = false;
        }
        let newperson = {
            id: origList.length,
            first_name: firstName,
            last_name: lastName,
            gender: gender,
            Attendance: newAttendance
        }
        Push(newperson)
    }

    return (
        <>
        <div>
            <h1>Admin Portal</h1>
            <div className=" pt-4">
                <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name: </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="firstName" placeholder="Joe" />
                    </div>
                </div>
                <div className="form-group row pt-1">
                    <label htmlFor="lastName" className="col-sm-2 col-form-label">last Name: </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="lastName" placeholder="Schmoe"  />
                    </div>
                </div>
                <fieldset className="form-group pt-1">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">Gender: </legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input radio" type="radio" name="gridRadios" id="gridRadios1" value="M" />
                                <label className="form-check-label" htmlFor="gridRadios1">Male</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input radio" type="radio" name="gridRadios" id="gridRadios2" value="F" />
                                <label className="form-check-label" htmlFor="gridRadios2">Female</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="form-group row pt-1">
                 <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                </div>
                </form>
            </div>
        </div>
        </>
    );
}
export default Admin;