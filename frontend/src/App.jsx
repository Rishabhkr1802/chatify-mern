import { useEffect } from "react";
import Router from "./routes/Router";
import { useDispatch } from "react-redux";
// import { fetchMe } from "./store/AuthSlice";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchMe());
  // }, [dispatch]);

  return (
    <div data-theme="dark" className="font-poppins">
      <Router />
    </div>
  );
}

export default App;
