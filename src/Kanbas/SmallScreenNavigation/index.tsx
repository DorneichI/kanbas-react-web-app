import { HiMiniBars3 } from "react-icons/hi2";
import { useLocation } from "react-router";
import "./index.css"
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt,
    FaInbox, FaClock, FaTv, FaArrowCircleRight, FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function SmallScreenNavigation() {
    const { pathname } = useLocation();
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
            <div className={pathname.includes("Courses") ? "d-none" : "d-block d-md-none"}>
                <div className="d-flex justify-content-between wd-courses-topbar-small-screen p-3">
                        <button className="btn btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#smallScreenNavigationCard" aria-expanded="false" aria-controls="smallScreenNavigationCard">
                            <HiMiniBars3 className="fs-3 "/>
                        </button>
                        <div>
                            {links.map((link, index) => (
                                pathname.includes(link.label) ? <div key={index}>{link.label}</div> : <></>
                            ))}
                        </div>
                        <div></div>
                </div>
            </div>
            <div className="collapse" id="smallScreenNavigationCard">
                <div className={`card card-body d-block d-md-none ${pathname.includes("Courses") ? "d-none" : "d-block d-md-none"}`}>
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
        </>
    );
};

export default SmallScreenNavigation;