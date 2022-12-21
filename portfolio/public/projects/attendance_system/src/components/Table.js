import ListItem from "./ListItem";



function Table({list, origAttendance}) {

    var dates =[];
    var objectDates = [];

    function convertDateToObject(date) {
        const dateMonthTranslation = {"0": "Jan", "1": "Feb", "2": "Mar", "3": "Apr", "4": "May", "5": "Jun", "6": "Jul", "7": "Aug", "8": "Sep", "9": "Oct", "10": "Nov", "11": "Dec"}
        return dateMonthTranslation[date.getMonth()] +  date.getDate() + "_" + date.getFullYear().toString().slice(2,4);
    }

    function decideDates() {
        let rawDates = Object.keys(origAttendance)
        let today = new Date();
        // "December 25, 2022 05:35:32"
        console.log(today)
        let dateList = rawDates.map((date) => getDateObject(date));
        dateList.push(today);
        dateList.sort((date1, date2) => date1 - date2);
        let index = dateList.indexOf(today);

        //if current day is sunday then display today
        if (today.getDay() === 0) {
            console.log("today is sunday")
            // dates.push(dateList[index - 2])
            // dates.push(dateList[index- 1])
            // dates.push(dateList[index])
            // dates.push(dateList[index + 1])
            // dates.push(dateList[index + 2]);
            // dates.push(dateList[index + 3]);
            dates.push(dateList[index -5])
            dates.push(dateList[index- 4])
            dates.push(dateList[index-3])
            dates.push(dateList[index -2])
            dates.push(dateList[index-1]);
            dates.push(dateList[index]);
            dates.splice(dates.indexOf(today), 1)
        }
        // if current day is not sunday then don't display today...display next sunday
        if(today.getDay() !== 0){
            // dates.push(dateList[index - 2])
            // dates.push(dateList[index - 1])
            // dates.push(dateList[index + 1])
            // dates.push(dateList[index + 2]);
            // dates.push(dateList[index + 3]);
            // dates.push(dateList[index + 4]);
            dates.push(dateList[index -4])
            dates.push(dateList[index- 3])
            dates.push(dateList[index-2])
            dates.push(dateList[index -1])
            dates.push(dateList[index+1]);
            dates.push(dateList[index+2]);
            dates.splice(dates.indexOf(today), 1)

        }
        console.log("dates displayed")
        console.log(dates)

        //convert all the dates to the string format that they are stored in the database for easy comparison
        dates.forEach((date) => {
            if(date !== undefined) {
                objectDates.push(convertDateToObject(date));
            }
        });
        
    }

    

    function getDateObject(date) {
        const monthTranslation = {"jan": 1, "feb": 2, "mar": 3, "apr": 4, "may": 5, "jun": 6, "jul": 7, "aug": 8, "sep": 9, "oct": 10, "nov": 11, "dec": 12}
        let rawMonth = date.slice(0,3).toLowerCase();
        let rawDay = date.slice(3,9).split('_')[0];
        let rawYear = "20" + date.split("_")[1];
        let dateObject = new Date(rawYear, monthTranslation[rawMonth]-1, rawDay);
        return dateObject;
    }

    function getDateList() {
        decideDates();
        function translate(date) {
            const dateMonthTranslation = {"0": "Jan", "1": "Feb", "2": "Mar", "3": "Apr", "4": "May", "5": "Jun", "6": "Jul", "7": "Aug", "8": "Sep", "9": "Oct", "10": "Nov", "11": "Dec"}
            return dateMonthTranslation[date.getMonth()];
        }
       
        return (
            <>
                {dates.map((date) => <span className="dateLabel">{String(translate(date) + " " +  date.getDate())}</span>)}
            </>  
        )
    }
    

    
    

    function formatItem(item) {
        //Strip all attendance data except for the 5 dates we want to display(cleaner and easier since the other code already is working)
        let attendance = item.Attendance;
        let filteredDates = {};
        objectDates.forEach((date) => {
            filteredDates[date] = attendance[date];
        })
        let newItem = item
        newItem.Attendance = filteredDates;
        return newItem;
    }
    
    
        
        return (
            <>
                <div className="">
                    <table>
                        <tbody className="">
                            <tr className="table-head">
                                <td className="name">First Name</td>
                                <td className="name border-right">Last Name</td>
                                
                                <td className="attendance">{getDateList()}</td>
                            </tr>


                            {list.map((item) =>  <ListItem key={item.id} data={formatItem(item)} />)}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }

export default Table;