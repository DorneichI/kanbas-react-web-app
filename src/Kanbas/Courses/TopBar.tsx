import { HiMiniBars3 } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa6";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom"
import { courses } from "../Database";
import { navigationItems } from "./Navigation/NavigationItems";
import "./TopBar.css";

function TopBar() {
  const { pathname } = useLocation();
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
    return(
        <>
            <div className="d-none d-md-block">
                <div className="d-flex">
                    <nav aria-label="breadcrumb position-absolute bottom-100 end-100">
                    <ol className="breadcrumb wd-courses-topbar m-0 p-3">
                        <li className="breadcrumb-item wd-fake-breadcrumb">
                            <button className="btn btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCourseNavDefault" aria-expanded="true" aria-controls="collapseCourseNavDefault">
                                <HiMiniBars3 className="fs-3 "/>
                            </button>
                        </li>
                        <li className="breadcrumb-item wd-fake-breadcrumb p-1"><Link to={"Home"}>{course?.number} {course?.name}</Link></li>
                        {navigationItems.map((item, index) => pathname.includes(item) ? 
                        <li className="breadcrumb-item active wd-breadcrumb p-1" aria-current="page">{item}</li> : 
                        <></>)}
                    </ol>
                    </nav> 
                </div> <hr className="m-0"/>
            </div>
        </>
    );
};

export default TopBar;

