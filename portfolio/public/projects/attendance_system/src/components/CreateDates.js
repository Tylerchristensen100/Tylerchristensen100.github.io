import { db } from "./Firebase";
import { ref, set,remove  } from 'firebase/database';

//will add dates to firebase

//TODO: remove dates more than a few weeks old from firebase

function CreateDates({list}) {
    let dates = Object.keys(list[0].Attendance);
    

    function Push(list) {
        let reference = ref(db, `/1leH85GY7zRQtyYVxRxjJANahPw6MjnEASokm1VRQZ-k/Sheet1/`)
        remove(reference)
        set(reference, list)
    }

    function getDateObject(date) {
        const monthTranslation = {"jan": 1, "feb": 2, "mar": 3, "apr": 4, "may": 5, "jun": 6, "jul": 7, "aug": 8, "sep": 9, "oct": 10, "nov": 11, "dec": 12}
        let rawMonth = date.slice(0,3).toLowerCase();
        let rawDay = date.slice(3,9).split('_')[0];
        let rawYear = "20" + date.split("_")[1];
        let dateObject = new Date(rawYear, monthTranslation[rawMonth]-1, rawDay);
        return dateObject;
    }





    function convertDateToObject(date) {
        const dateMonthTranslation = {"0": "Jan", "1": "Feb", "2": "Mar", "3": "Apr", "4": "May", "5": "Jun", "6": "Jul", "7": "Aug", "8": "Sep", "9": "Oct", "10": "Nov", "11": "Dec"}
        return dateMonthTranslation[date.getMonth()] +  date.getDate() + "_" + date.getFullYear().toString().slice(2,4);
    }

    function generateSundays() {
        let today = new Date();
        let sundays = [];
        let sunday = new Date();
        sunday.setDate(today.getDate() + (7-today.getDay()) % 7);
        sundays.push(sunday);
        for (let i = 0; i < 52; i++) {
            sunday = new Date(sunday);
            sunday.setDate(sunday.getDate() + 7);
            sundays.push(sunday);
        }
        return sundays;
    }
   
    function datesForDB() {
        let sundays = generateSundays();
        let datesForDB = [];
        sundays.forEach((sunday) => {
            datesForDB.push(convertDateToObject(sunday));
        })
        return datesForDB;
    }
    let dateString = datesForDB();
    let cleanDates = dates.concat(dateString);

    cleanDates = cleanDates.filter((item, index) => cleanDates.indexOf(item) === index);

    function addDatestoDB(list, cleanDates) {
        let newList = list;
        newList.forEach((person) => {
            cleanDates.forEach((date) => {
                if(!person.Attendance.hasOwnProperty(date)) {
                    person.Attendance[date] = false;
                }
            })
        })
        console.log(newList)
        return newList;
    }

    


    return(
        <>
            <div className="pt-4">
                <h3>Create Dates</h3>
                <button className="btn btn-primary m-3" onClick={() => Push(addDatestoDB(list, cleanDates))}>Add Dates</button>


                    <table>
                        <tbody className="">
                            <tr className="table-head">
                                <td className="name">Dates</td>
                            </tr>
                            {cleanDates.map((item) =>  
                            <tr key={item}><td>{item}</td></tr>
                                )}
                        </tbody>
                    </table>

            </div>
        </>
    )
}
export default CreateDates;