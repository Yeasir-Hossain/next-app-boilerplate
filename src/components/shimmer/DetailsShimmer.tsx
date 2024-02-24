import Image from "next/image";
import { BiStar } from "react-icons/bi";

export default function DetailsShimmer() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='max-w-screen-[1200px] mx-auto mb-20'>
      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-0 md:col-span-3'></div>
        <div className='col-span-12 w-full px-5 md:col-span-9'>
          <div className='flex w-full items-center justify-between py-6'>
            <div className='flex items-center'>
              <Image
                src='/images/team_placeholder.png'
                alt='team placeholder name'
                height={0}
                width={0}
                sizes='100vw'
                className='mr-4 h-16 w-16 animate-pulse select-none rounded-full bg-white p-[2px] ring-1 ring-gray-100'
              />
              <div className='text-white'>
                <div className='col-span-8 h-6 w-64 animate-pulse rounded-md bg-neutral '></div>
                <div className='flex gap-4'>
                  <div className='col-span-8 mt-3 h-4 w-20 animate-pulse rounded-md bg-neutral '></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className='my-5 flex select-none items-center justify-start gap-5'>
            <div className='col-span-8 mt-3 h-1 w-14 animate-pulse rounded-md bg-neutral '></div>
            <div className='col-span-8 mt-3 h-1 w-14 animate-pulse rounded-md bg-neutral '></div>
            <div className='col-span-8 mt-3 h-1 w-14 animate-pulse rounded-md bg-neutral '></div>
          </div>
        </div>
      </div>

      <div className='m-2 my-2 mb-20 grid grid-cols-12 gap-5 md:m-0 md:mb-0 '>
        <div className='col-span-3 hidden rounded-2xl border-[1px] border-primary md:block'>
          {arr.map((item) => (
            <div key={item} className='flex items-center gap-2 p-3'>
              <div className='col-span-8 h-10 w-10 animate-pulse rounded-full bg-neutral'></div>
              <div className='text-white'>
                <div className='col-span-8 h-4 w-44 animate-pulse rounded-md bg-neutral '></div>
                <div className='flex gap-4'>
                  <div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='col-span-12  flex flex-col items-center md:col-span-9'>
          <div className='h-auto w-full rounded-2xl border-[1px] border-primary pb-3'>
            {arr.map((item) => (
              <div className='grid grid-cols-12 gap-2 p-3 py-2' key={item}>
                <div className='col-span-1 h-12 w-full animate-pulse rounded-md bg-neutral'></div>
                <div className='col-span-8 h-12 w-full animate-pulse rounded-md bg-neutral '></div>
                <div className='col-span-2 h-12 w-full animate-pulse rounded-md bg-neutral'></div>
                <div className='col-span-1 flex h-12 w-full animate-pulse items-center justify-center'>
                  <BiStar className='text-xl text-neutral' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
