import Checkbox from "./Checkbox";


function ListItem(data) {
    const item = data.data;
    
    const dates = Object.keys(item.Attendance)
    

    return (
        <tr key="{item.id}">
           <td className="name">{item.first_name}</td>
           <td className="name">{item.last_name}</td>
            |
            <td className="attendance">
           {dates.map((date, index) => {
             return <Checkbox key={index} date={date} attended={() => {return item.Attendance?.[date];}} item={item} />
           }) }
           </td>
        </tr>
    );
}
export default ListItem;