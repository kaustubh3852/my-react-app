import MissedGoal from "./MissedGoal";
import MadeGoal from "./MadeGoal";
const Goal = (props) => {
    const isGoal = props.isGoal;
    if(isGoal) {
        return (
            <MadeGoal/>
        );
    }
    return (
        <MissedGoal/>
    );
};
export default Goal;