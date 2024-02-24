const NewsShimmer = () => {
  return (
    <div className='my-5 mb-20 lg:mb-8'>
      {/* news slider */}
      <div className='m-2 '>
        <div className='flex h-[200px] w-full animate-pulse rounded-md bg-neutral lg:h-[400px]'>
          <div className='m-3 h-[170px] w-[200px] animate-pulse rounded-md bg-slate-400 lg:h-[380px] lg:w-[800px]'></div>
          <div className='mt-8 flex w-full flex-col gap-4 px-5 lg:mt-20'>
            <div className='h-4 w-28 animate-pulse rounded-md bg-slate-400'></div>
            <div className='h-4 w-full animate-pulse rounded-md bg-slate-400'></div>
            <div className='h-4 w-full animate-pulse rounded-md bg-slate-400'></div>
            <div className='h-4 w-full animate-pulse rounded-md bg-slate-400'></div>
            <div className='h-4 w-full animate-pulse rounded-md bg-slate-400'></div>
            <div className='hidden h-4 w-full animate-pulse rounded-md bg-slate-400 lg:block'></div>
            <div className='hidden h-4 w-full animate-pulse rounded-md bg-slate-400 lg:block'></div>
            <div className='hidden h-4 w-full animate-pulse rounded-md bg-slate-400 lg:block'></div>
            <div className='hidden h-4 w-full animate-pulse rounded-md bg-slate-400 lg:block'></div>
          </div>
        </div>
        <div />
      </div>
      <div className='m-4 my-3 grid grid-cols-1 gap-4 lg:grid-cols-3'>
        <div className='h-[140px] w-full animate-pulse rounded-md bg-neutral lg:h-[180px]'>
          <div className='mt-8 flex w-full flex-col gap-4 px-5 lg:mt-20'>
            <div className='h-4 w-28 animate-pulse rounded-md bg-slate-400'></div>
            <div className='h-4 w-48 animate-pulse rounded-md bg-slate-400'></div>
            <div className='h-4 w-48 animate-pulse rounded-md bg-slate-400'></div>
          </div>
        </div>
        <div className='h-[140px] w-full animate-pulse rounded-md bg-neutral lg:h-[180px]'>
          <div className='mt-8 flex w-full flex-col gap-4 px-5 lg:mt-20'>
            <div className='h-4 w-28 animate-pulse rounded-md bg-slate-400'></div>
            <div className='h-4 w-48 animate-pulse rounded-md bg-slate-400'></div>
            <div className='h-4 w-48 animate-pulse rounded-md bg-slate-400'></div>
          </div>
        </div>
        <div className='h-[140px] w-full animate-pulse rounded-md bg-neutral lg:h-[180px]'>
          <div className='mt-8 flex w-full flex-col gap-4 px-5 lg:mt-20'>
            <div className='h-4 w-28 animate-pulse rounded-md bg-slate-400'></div>
            <div className='h-4 w-48 animate-pulse rounded-md bg-slate-400'></div>
            <div className='h-4 w-48 animate-pulse rounded-md bg-slate-400'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsShimmer;
