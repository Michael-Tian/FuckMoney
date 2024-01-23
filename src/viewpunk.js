import Silder from './slider'
import sildes from './mock.json'
const ViewPunk = () => {
    return(
        <div className="ViewPunk blur_body">
            <Silder sildes={sildes}></Silder>
        </div>
    );
}
export default ViewPunk;