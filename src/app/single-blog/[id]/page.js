import SinglePost from "@/Api/singlePost";
import Image from "next/image";

export default async function SingleBlog({params}){
    // console.log(params.id);

    const res = await SinglePost(params?.id);
    const data = res?.postDetails;
    // console.log(res?.postDetails?.title);

    return (
    <div className='w-3/5 py-3 mx-auto my-10 border-2 rounded-md px-7 bg-slate-100'>
        <h2 className="text-center">Post ID: {data?.list_id}</h2>
    {/* <!-- Avatar Media --> */}
        <div className="flex items-center justify-between mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                <div className="flex-shrink-0">
                    <Image width={100} height={100} className="w-12 h-12 rounded-full" src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" alt="Img"/>
                </div>

                <div className="grow">
                    <div className="grid gap-2 sm:flex sm:justify-between sm:items-center">
                        <div className="text-left">
                            {/* <!-- Tooltip --> */}
                            <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                                <div className="block cursor-pointer hs-tooltip-toggle sm:mb-1">
                                <span className="font-semibold text-gray-800 dark:text-gray-200">
                                    Leyla Ludic
                                </span>
                                </div>
                            </div>
                            {/* <!-- End Tooltip --> */}

                            <ul className="text-xs text-gray-500">

                                <li className="relative inline-block pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                                8 min read
                                </li>
                                <li className="relative inline-block pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                                12-12-2000
                                </li>
                            </ul>
                        </div>

                        {/* <!-- Button Group --> */}
                        <div>
                            <button type="button" className="py-1.5 px-2.5 sm:py-2 sm:px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs sm:text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                <svg className="w-3.5 h-3.5" xmlns="http: www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                                Tweet
                            </button>
                        </div>
                        {/* <!-- End Button Group --> */}
                    </div>
                </div>
            </div>
        </div>
    {/* <!-- End Avatar Media --> */}

        <div>
            <Image width={200} height={200} layout='responsive' src={data?.img} alt="img" />
            <div className="card-body">
                <h2 className="text-2xl card-title">{data?.title}</h2>
                <p className='font-thin text-gray-600'>{data?.content}</p>

            </div>
        </div>
    </div>
    );
}