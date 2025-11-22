function Login() {
  return (
    <main className="h-screen lg:w-5xl m-auto shadow-2xl">
      <section className="flex justify-start items-center h-full">
        <form className="w-full">
          <div className="">
            <label class="block">
              <span class="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Email</span>
              <input type="email" class="  ..." />
              <p class="invisible peer-invalid:visible ...">Please provide a valid email address.</p>
            </label>

          </div>

          <br /><label htmlFor="email">Email<span className="text-red-400">*</span></label>
          <input type="email" name="email" placeholder="Enter Emailer" className="border px-2 py-1 rounded-sm shadow-lg placeholder:text-red-400" />
        </form>
      </section>
    </main>
  )
}

export default Login;