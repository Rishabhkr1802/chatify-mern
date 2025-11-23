import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../store/AuthSlice";
import { Eye, EyeOff, Lock, MailPlus, MessageSquareLock } from "lucide-react";

function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isShowPassword, setIsShowPassword] = useState(false);

  function showPassword() {
    setIsShowPassword((prev) => !prev);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(loginThunk(formData));
  }

  return (
    <main className="h-screen lg:w-5xl m-auto shadow-2xl md: p-4">
      <section className="grid md:grid-cols-2 items-center jusitfy-center h-full">

        <div className="flex flex-col gap-4 md:p-4">
          <div className="flex gap-6 justify-center items-center">
            <MessageSquareLock size={40} />
            <h4 className="text-4xl text-base-400">Login</h4>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

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
              <button className="btn btn-primary text-lg w-full mt-4">Login</button>
            </div>

          </form>

          <div className="">
            <p>Create a new account: <Link to="/register" className="text-sky-400">Register</Link> </p>
          </div>

        </div>

        <div className="grid grid-cols-3 gap-2 justify-center items-center w-full">
          {[...Array(9)].map((_, i) => <div key={i} className="skeleton h-auto w-auto min-h-30 min-w-20"></div>)}
        </div>

      </section>
    </main>
  )
}

export default Login;