import ModuleList from "../Modules/List";
import "../../styles.css"
import Calendar from "../Calendar";

function Home() {
  return (
    <div className="d-flex">
      <div className="flex-grow-1"><ModuleList /></div>
      <div className="d-none d-lg-block">
                <h3>Course Status</h3>
                <div className="d-flex flex-column mb-5">
                    <div className="btn-group mb-5" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light wd-kanbas-button-primary">Publish</button>
                        <button type="button" className="btn btn-light wd-kanbas-button-primary">Unpublished</button>
                    </div>
                    <button type="button" className="btn btn-light wd-kanbas-button-primary mb-1">Import Existing Content</button>
                    <button type="button" className="btn btn-light wd-kanbas-button-primary mb-1">Import From Commons</button>
                    <button type="button" className="btn btn-light wd-kanbas-button-primary mb-1">Choose Home Page</button>
                    <button type="button" className="btn btn-light wd-kanbas-button-primary mb-1">View Course Stream</button>
                    <button type="button" className="btn btn-light wd-kanbas-button-primary mb-1">New Announcement</button>
                    <button type="button" className="btn btn-light wd-kanbas-button-primary mb-1">New Analytics</button>
                    <button type="button" className="btn btn-light wd-kanbas-button-primary mb-1">View Course Notifications</button>
                </div>


                <h3>Coming Up</h3>
                <ul className="list-group">
                  <Calendar />
                </ul>
            </div>
    </div>
  );
}
export default Home;