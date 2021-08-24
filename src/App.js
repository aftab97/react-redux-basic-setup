import "./App.css";
import CommentBox from "./components/CommentBox";
import { Route } from "react-router-dom";
import CommentList from "./components/CommentList";

function App() {
  return (
    <div>
      <Route path="/" component={CommentBox} />
      <Route path="/" component={CommentList} />
    </div>
  );
}

export default App;
