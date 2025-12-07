import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupThunk } from "../store/AuthSlice";
import { Eye, EyeOff, Lock, MailPlus, MessageSquareShare, UserRound } from "lucide-react";
import { toast } from "react-hot-toast";
import Loader from "../sharedComponents/Loader";

function Register() {
  const dispatch                            = useDispatch();
  const { isLoading }                       = useSelector((state) => state.auth);
  const [formData, setFormData]             = useState({ name: "", email: "", password: "" });
  const [isShowPassword, setIsShowPassword] = useState(false);

  function showPassword() {
    setIsShowPassword((prev) => !prev);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const resultAction = await dispatch(signupThunk(formData));
      if (signupThunk.fulfilled.match(resultAction)) {
        toast.success(resultAction?.payload?.messages || "Registration Successfull!!!");
      } else {
        toast.error(resultAction.payload || "Registration Failed");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }
  }

  if (isLoading) return <Loader />

  return (
    <main className="h-screen lg:w-5xl m-auto shadow-2xl md: p-4 bg-base-400">
      <section className="grid md:grid-cols-2 items-center jusitfy-center h-full">

        <div className="flex flex-col gap-4 md:p-4">
          <div className="flex gap-6 justify-center items-center">
            <MessageSquareShare size={40} />
            <h4 className="text-4xl text-base-400">Register</h4>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="form-controls">
              <label htmlFor="name" className="label mb-2">Name</label><br />
              <div className="relative">
                <UserRound size={20} className="absolute top-3 left-3 z-10 text-base-400" />
                <input type="text" name="name" className="input rounded-lg w-full pl-10 shadow" value={formData.name} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
              </div>
            </div>

            <div className="form-controls">
              <label htmlFor="email" className="label mb-2">Email</label><br />
              <div className="relative">
                <MailPlus size={20} className="absolute top-3 left-3 z-10 text-base-400" />
                <input type="email" name="email" className="input rounded-lg w-full pl-10 shadow" value={formData.email} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
              </div>
            </div>

            <div className="form-controls">
              <label htmlFor="password" className="label mb-2">Password</label><br />
              <div className="relative">
                <Lock size={20} className="absolute top-3 left-3 z-10 text-base-400" />
                <input type={isShowPassword ? "text" : "password"} name="password" className="input rounded-lg w-full px-10 shadow" value={formData.password} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
                {isShowPassword && <Eye className="absolute top-2 right-3 z-10 text-base-400 cursor-pointer" onClick={showPassword} />}
                {!isShowPassword && <EyeOff className="absolute top-2 right-3 z-10 text-base-400 cursor-pointer" onClick={showPassword} />}
              </div>
            </div>

            <div className="form-controls">
              <button className="btn bg-linear-to-r from-emerald-300 to-indigo-300 shadow text-lg w-full mt-4">Register</button>
            </div>

          </form>

          <div className="">
            <p>Already have an account: <Link to="/login" className="text-sky-400">Login</Link> </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 justify-center items-center w-full">
          {[...Array(9)].map((_, i) => <div key={i} className="skeleton h-auto w-auto min-h-30 min-w-20"></div>)}
        </div>

      </section>
    </main>
  )
}

export default Register;