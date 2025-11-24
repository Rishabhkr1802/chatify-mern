function UsersLoadingSkeleton() {
  return (
    <div className="space-y-2">
      {[...Array(10)].map((item,i) => (
        <div key={i} className="mx-auto min-w-[300px] max-w-sm p-3 rounded-md border shadow border-slate-300">
          <div className="flex animate-pulse space-x-4">
            <div className="size-10 rounded-full bg-gray-200"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-2 rounded bg-gray-200"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  {/* <div className="col-span-2 h-2 rounded bg-gray-200"></div> */}
                  <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                </div>
                {/* <div className="h-2 rounded bg-gray-200"></div> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default UsersLoadingSkeleton;