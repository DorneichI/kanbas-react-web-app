import { FaEllipsisV } from "react-icons/fa";
import "../../styles.css"
function Navbar() {
    return(
        <div className="d-flex justify-content-between">
          <div>
          <form className="d-flex" role="search">
            <input className="form-control wd-kanbas-search" type="search" placeholder="Search Assignments" aria-label="Search" />
        </form>
          </div>
          <div className="d-flex">
            <div className="p-2 wd-tight-groupless-things">
                <button type="button" className="btn btn-light wd-kanbas-button-primary">Group</button>
            </div>
            <div className="p-2 p-2 wd-tight-groupless-things">
                <button type="button" className="btn btn-light wd-kanbas-button-highlight">+ Assignment</button>
            </div>
            <div className="p-2 p-2 wd-tight-groupless-things">
                <button type="button" className="btn btn-light wd-kanbas-button-primary"><FaEllipsisV/></button>
            </div>
          </div>
      </div>
    );
}

export default Navbar;