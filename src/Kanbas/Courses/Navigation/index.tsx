import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
import { navigationItems } from "./NavigationItems";
function CourseNavigation() {
  const { pathname } = useLocation();
  return (
    <div className="collapse.show collapse-horizontal" id="collapseCourseNavDefault">
      <ul className="wd-navigation d-none d-md-block">
        {navigationItems.map((item, index) => (
          <li key={index} className={pathname.includes(item) ? "wd-active" : ""}>
            <Link to={item}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CourseNavigation;