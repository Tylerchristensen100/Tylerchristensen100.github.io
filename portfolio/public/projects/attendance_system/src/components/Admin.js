import { db } from "./Firebase";
import { ref, push, set  } from 'firebase/database';

function Admin({list}) {
    const origList = list;
    console.log(origList)

    const Push = (newPerson) => {
        console.log(push(ref(db, `/1leH85GY7zRQtyYVxRxjJANahPw6MjnEASokm1VRQZ-k/Sheet1/`)), newPerson);
        // console.log(set(ref(db, `/1leH85GY7zRQtyYVxRxjJANahPw6MjnEASokm1VRQZ-k/Sheet1/${newPerson.id}/`, newPerson)));
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
        console.log(newperson)
        Push(newperson)
    }

    return (
        <>
        <div>
            <h1>Admin Portal</h1>
            <div className=" pt-4">
                <form onSubmit={handleSubmit}>
                <div class="form-group row">
                    <label for="firstName" class="col-sm-2 col-form-label">First Name: </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="firstName" placeholder="Joe" />
                    </div>
                </div>
                <div class="form-group row pt-1">
                    <label for="lastName" class="col-sm-2 col-form-label">last Name: </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="lastName" placeholder="Schmoe"  />
                    </div>
                </div>
                <fieldset class="form-group pt-1">
                    <div class="row">
                        <legend class="col-form-label col-sm-2 pt-0">Gender: </legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input radio" type="radio" name="gridRadios" id="gridRadios1" value="M" />
                                <label class="form-check-label" for="gridRadios1">Male</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input radio" type="radio" name="gridRadios" id="gridRadios2" value="F" />
                                <label class="form-check-label" for="gridRadios2">Female</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div class="form-group row pt-1">
                 <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                </div>
                </form>
            </div>
        </div>
        </>
    );
}
export default Admin;