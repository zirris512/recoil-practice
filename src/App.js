import { RecoilRoot } from "recoil";
import TodoList from "./Components/TodoList";

const App = () => {
    return (
        <RecoilRoot>
            <TodoList />
        </RecoilRoot>
    );
};

export default App;
