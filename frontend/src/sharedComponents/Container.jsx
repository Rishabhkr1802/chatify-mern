function Container({ heading, children, footer }) {
  return (
    <article className="flex flex-col gap-3 h-full relative">
      <nav>
        <h2 className="bg-linear-to-r from-emerald-400 to-indigo- bg-clip-text text-transparent font-extrabold font-inconsolata text-3xl">{heading}</h2>
      </nav>

      <div className="flex-1 overflow-y-auto">
        {children}
      </div>

      <div className="sticky bottom-0 left-0 w-full">
        {footer}
      </div>
    </article>
  )
}

export default Container;