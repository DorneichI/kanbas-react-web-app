import { FaEllipsisV } from "react-icons/fa";
import "../../styles.css"
function Navbar() {
    return(
      <div className="d-flex justify-content-end">
        <div className="p-2 wd-tight-groupless-things">
            <button type="button" className="btn btn-light wd-kanbas-button-primary">Collaps All</button>
        </div>
        <div className="p-2 wd-tight-groupless-things">
            <button type="button" className="btn btn-light wd-kanbas-button-primary">View Progress</button>
        </div>
        <div className="p-2 p-2 wd-tight-groupless-things">
            <div className="dropdown">
                <button className="btn btn-light dropdown-toggle wd-kanbas-button-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown button
                </button>
                <ul className="dropdown-menu wd-kanbas-button-primary">
                  <li className="dropdown-item">Action</li>
                  <li className="dropdown-item">Another action</li>
                  <li className="dropdown-item">Something else here</li>
                </ul>
              </div>
        </div>
        <div className="p-2 p-2 wd-tight-groupless-things">
              <button type="button" className="btn btn-light wd-kanbas-button-highlight">Module</button>
          </div>
          <div className="p-2 p-2 wd-tight-groupless-things">
              <button type="button" className="btn btn-light wd-kanbas-button-primary"><FaEllipsisV/></button>
          </div>
      </div>
    );
}

export default Navbar;