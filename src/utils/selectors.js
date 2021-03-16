import { selector } from "recoil";
import { todoListFilterState, todoListState } from "./atoms";

export const filteredTodoListState = selector({
    key: "filteredTodoListState",
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case "Show Completed":
                return list.filter((item) => item.isComplete);
            case "Show Uncompleted":
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    },
});

export const todoListStatsState = selector({
    key: "todoListStatsState",
    get: ({ get }) => {
        const todoList = get(todoListState);
        const total = todoList.length;
        const totalCompleted = todoList.filter((item) => item.isComplete).length;
        const totalUncompleted = total - totalCompleted;
        const percentCompleted = total === 0 ? 0 : (totalCompleted / total) * 100;

        return {
            total,
            totalCompleted,
            totalUncompleted,
            percentCompleted,
        };
    },
});
