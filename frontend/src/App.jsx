import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuthThunk } from "./store/AuthSlice";
import Router from "./routes/Router";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthThunk());
  }, [dispatch]);

  return (
    <div data-theme="dark" className="font-poppins">
      <Router />
      <Toaster />
    </div>
  );
}

export default App;
