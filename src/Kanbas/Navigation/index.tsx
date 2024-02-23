import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { courses } from "../Database";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt,
         FaInbox, FaClock, FaTv, FaArrowCircleRight, FaQuestion } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",     icon: <FaInbox className="fs-2" />},
    { label: "History",   icon: <FaClock className="fs-2" />},
    { label: "Studio",    icon: <FaTv className="fs-2" />},
    { label: "Commons",   icon: <FaArrowCircleRight className="fs-2" />},
    { label: "Help",      icon: <FaQuestion className="fs-2" />},
  ];
  const { pathname } = useLocation();
  return (
    <div className="d-flex">
      <ul className="wd-kanbas-navigation d-none d-md-block">
        <li>
            <img src="/images/northeastern_logo_black.jpeg" alt="Northeastern Logo" width="60" height="60" />
        </li>
        {links.map((link, index) => (
          <li key={index} className={`${pathname.includes(link.label) ? "wd-active" : ""} ${link.label === "Account" ? "grey" : ""}`}>
            {link.label === "Courses" ?
            <button className="" type="button" data-bs-toggle="collapse" data-bs-target="#courseButtonNav" aria-expanded="false" aria-controls="courseButtonNav">
            {link.icon} <br/> {link.label}
            </button>:
            <Link to={`/Kanbas/${link.label}`}> {link.icon} <br/> {link.label} </Link>}
          </li>
        ))}
      </ul>
      <div className="collapse collapse-horizontal" id="courseButtonNav">
        <div className="card card-body wd-courses-button-nav-card">
          <h2> Courses </h2>
          <hr/>
          <ul className="">
              {courses.map((course, index) => (
                  <li key={index} >
                      <Link to={`/Kanbas/Courses/${course._id}/Home`}> {course.number}: {course.name} </Link>
                  </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default KanbasNavigation;