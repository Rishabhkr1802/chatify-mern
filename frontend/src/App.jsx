import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuthThunk } from "./store/AuthSlice";
import Router from "./routes/Router";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthThunk());
  }, [dispatch]);

  return (
    <div data-theme="dark" className="font-poppins">
      <Router />
    </div>
  );
}

export default App;
