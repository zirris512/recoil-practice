import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../utils/selectors";

const TodoListStats = () => {
    const { total, totalCompleted, totalUncompleted, percentCompleted } = useRecoilValue(
        todoListStatsState
    );

    const formattedPercent = Math.round(percentCompleted);

    return (
        <ul>
            <li>Total items: {total}</li>
            <li>Items completed: {totalCompleted}</li>
            <li>Items not completed: {totalUncompleted}</li>
            <li>Percent completed: {formattedPercent}%</li>
        </ul>
    );
};

export default TodoListStats;
