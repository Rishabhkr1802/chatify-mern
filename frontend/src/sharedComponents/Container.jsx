function Container({ heading, children }) {
  return (
    <article className="flex flex-col gap-3 h-full">
      <nav>
        <h2 className="bg-linear-to-r from-emerald-400 to-indigo- bg-clip-text text-transparent font-extrabold font-inconsolata text-3xl">{heading}</h2>
      </nav>
      <div className="">
        {children}
      </div>
    </article>
  )
}

export default Container;