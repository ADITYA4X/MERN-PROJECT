export const FullBlogSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="flex justify-center">
        <div className="col-span-8 ">
          <div className="text-5xl font-extrabold">
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            <div className="text-stone-500 pt-2">
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5"> </div>
              <div className="pt-4">
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
              </div>

              <div className=" col-span-4 ">
                <div className="text-stone-600 text-lg">
                  <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                  <div className="flex">
                    <div className="pr-4 flex flex-col justify-center">
                      <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                      <div>
                        <div className="text-xl font-bold">
                          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                          <div className="pt-2 text-stone-500">
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
