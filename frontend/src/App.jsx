import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthThunk } from "./store/AuthSlice";
import { Toaster } from "react-hot-toast";
import Router from "./routes/Router";

function App() {
  const dispatch      = useDispatch();
  const { theme }     = useSelector((state) => state.theme);

  useEffect(() => {
    dispatch(checkAuthThunk());
  }, [dispatch]);

  return (
    <div data-theme={theme} className="font-poppins">
      <Router />
      <Toaster />
    </div>
  );
}

export default App;
