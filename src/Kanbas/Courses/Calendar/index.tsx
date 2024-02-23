import { useParams } from "react-router";
import { calendar } from "../../Database";

function Calendar() {
    const { courseId } = useParams();
    const eventList = calendar.filter((event) => event.course === courseId);
    return(
        <ul style={{maxWidth: "200px"}}>
            {eventList.map((event, index) => (
                <li key={index}>
                    <a href="#">{event.title}</a>
                </li>))}
        </ul>
    );
};

export default Calendar;