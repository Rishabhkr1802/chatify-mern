import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthThunk } from "./store/AuthSlice";
import { Toaster } from "react-hot-toast";
import Router from "./routes/Router";
// import Loader from "./sharedComponents/Loader";

function App() {
  const dispatch      = useDispatch();
  // const { isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuthThunk());
  }, [dispatch]);

  // if (isLoading) return <Loader />

  return (
    <div data-theme="light" className="font-poppins">
      <Router />
      <Toaster />
    </div>
  );
}

export default App;
