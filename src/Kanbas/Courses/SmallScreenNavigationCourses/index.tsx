import { HiMiniBars3 } from "react-icons/hi2";
import { useLocation, useParams } from "react-router-dom";
import { coursesDataBase } from "../../Database";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt,
    FaInbox, FaClock, FaTv, FaArrowCircleRight, FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navigationItems } from "../Navigation/NavigationItems";
import { FaChevronDown } from "react-icons/fa6";

function SmallScreenNavigationCourses() {
    const { pathname } = useLocation();
    const { courseId } = useParams();
    const course = coursesDataBase.find((course) => course._id === courseId);
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
    return(
        <>
            <div className="d-block d-md-none">
                <div className="d-flex justify-content-between wd-courses-topbar-small-screen p-3">
                        <button className="btn btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#smallScreenNavigationCardCourses" aria-expanded="false" aria-controls="smallScreenNavigationCardCourses">
                            <HiMiniBars3 className="fs-3 "/>
                        </button>
                        <div>
                            <ul className="wd-courses-small-screen-nav-middle-list">
                                <li>{course?.number}</li>
                                {navigationItems.map((item, index) => pathname.includes(item) ? 
                                <li>{item}</li> : 
                                <></>)}
                            </ul>
                        </div>
                        <button className="btn btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCourseNavSmallScreen" aria-expanded="false" aria-controls="collapseCourseNavSmallScreen">
                            <FaChevronDown className="fs-3 "/>
                        </button>
                </div>
            </div>
            <div className="collapse" id="smallScreenNavigationCardCourses">
                <div className="card card-body d-block d-md-none">
                    <div className="d-flex justify-content-start">
                        <ul className="wd-kanbas-navigation-small-screen">
                            {links.map((link, index) => (
                                <li key={index} className={`${link.label === "Account" ? "grey" : ""}`}>
                                        <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="collapse collapse" id="collapseCourseNavSmallScreen">
                <div className="card card-body d-block d-md-none">
                    <ul className="wd-navigation-courses-small-screen">
                        {navigationItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item}>{item}</Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SmallScreenNavigationCourses;