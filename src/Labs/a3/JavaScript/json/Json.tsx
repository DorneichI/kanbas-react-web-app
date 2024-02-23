import Destructing from "./Destructing";
import House from "./House";
import JsonStringify from "./JsonStringify";
import Spreading from "./Spread";

function Json() {

    return(
        <div>
            <h2>JSON</h2>
            <JsonStringify />
            <House />
            <Spreading />
            <Destructing />
        </div>
    );
    
}

export default Json