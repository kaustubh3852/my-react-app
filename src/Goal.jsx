import MissedGoal from "./MissedGoal";
import MadeGoal from "./MadeGoal";
const Goal = (props) => {
    const isGoal = props.isGoal;
    return (
        <>
        {isGoal ? <MadeGoal/> : <MissedGoal/>};
        </>
    );
}
export default Goal;