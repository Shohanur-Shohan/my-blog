
export default function Contact(){
    return (

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            

            <div className="max-w-lg mx-auto mt-12">
                {/* <!-- Card --> */}
                <div className="flex flex-col p-4 border rounded-xl sm:p-6 lg:p-8 dark:border-gray-700">
                <div className="text-center">
                    <h1 className="mb-3 text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                        Contact us
                    </h1>
                </div>

                <form>
                    <div className="grid gap-4 lg:gap-6">

                        <input type="text" placeholder="Full name" className="block w-full px-4 py-3 text-sm border-2 border-blue-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>

                        <input type="email" placeholder="Your Email"  autoComplete="email" className="block w-full px-4 py-3 text-sm border-2 border-blue-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>

                        <input type="text" placeholder="Your Website"  autoComplete="email" className="block w-full px-4 py-3 text-sm border-2 border-blue-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>

                        <textarea  rows="4" placeholder="Message" className="block w-full px-4 py-3 text-sm border-2 border-blue-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"></textarea>

                    </div>

                    <div className="grid mt-6">
                        <button type="submit" className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white transition bg-blue-600 border border-transparent rounded-md gap-x-3 hover:bg-blue-700 lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800">Submit</button>
                    </div>
                </form>
                </div>
                {/* <!-- End Card --> */}
            </div>
        </div>

    );
}