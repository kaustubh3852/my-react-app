import Son from './Son';
import Daughter from './Daughter';
const Parent = () => {
    return (
        <div>
        <h1>My two Children</h1>
        <Son>
            <p>This was written in the Parent component, but displayed as a part of the Son component</p>
        </Son>

        <Daughter>
            <p>This was written in the Parent component, but displayed as a part of the Daughter component</p>
        </Daughter>
        </div>

    );
}
export default Parent;