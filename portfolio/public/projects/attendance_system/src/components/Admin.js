import { set } from "firebase/database";
import { useState } from "react";
import { db, auth, signInWithEmailAndPassword } from "./Firebase";
import NewPerson from "./NewPerson";
import DeletePerson from "./DeletePerson";
import Export from "./Export";
import CreateDates from "./CreateDates";

function Admin({list}) {
    const [isAuth, setIsAuth] = useState(false)
    const [active, setActive] = useState("new")

    function handleAuthentication(e) {
        e.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email , password).then( (userCredential) => {
            const user = userCredential.user;
            // console.log(user)
            setIsAuth(true)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            alert("You are not authorized to access this page")
            console.log(errorCode)

            document.getElementById("email").value = "";
            document.getElementById("password").value = "";

        })
    }

    function displaycomponent() {
        if(active === "new") {
            return <NewPerson list={list} />
        }
        else if(active === "delete") {
            return <DeletePerson list={list} />
        }
        else if (active === "export") {
            return <Export list={list} />
        }
        else if (active === "dates") {
            return <CreateDates list={list} />
        }
    }
   

    if(isAuth) {
        return (
            <>
            <div>
                <h1>Admin Portal</h1>
                <ul className="nav nav-tabs pt-3">
                    <li className="nav-item">
                      <button className={active === "new" ?  "active nav-link" : 'nav-link'} aria-current="page" onClick={ () => setActive("new")} >New Person</button>
                    </li>
                    <li className="nav-item">
                      <button className={active === "delete" ?  "active nav-link" : 'nav-link'}  onClick={() => setActive("delete")} >Delete Person</button>
                    </li>
                    <li className="nav-item">
                      <button className={active === "export" ?  "active nav-link" : 'nav-link'} aria-current="page" onClick={ () => setActive("export")} >Export</button>
                    </li>
                    <li className="nav-item">
                      <button className={active === "dates" ?  "active nav-link" : 'nav-link'} aria-current="page" onClick={ () => setActive("dates")} >Create Dates</button>
                    </li>
                </ul>
                <div className="tab-content">
                    {displaycomponent()}
                </div>

                
            </div>
            </>
        );
    }
    else {
        return (
            <>
            <div className="pt-3">
            <h1> Log in to Admin Portal</h1>
            <form onSubmit={handleAuthentication}>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">First Name: </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" placeholder="Joe@example.com" autoComplete="username" />
                        </div>
                    </div>
                    <div className="form-group row pt-1">
                        <label htmlFor="Password" className="col-sm-2 col-form-label">last Name: </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="password" placeholder="******" autoComplete="current-password" />
                        </div>
                    </div>
                    <div className="form-group row pt-1">
                     <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Log in</button>
                    </div>
                    </div>
            </form>
            </div>        
            </>
        )
    }
}
export default Admin;