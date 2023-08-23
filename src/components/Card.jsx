import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = (props) => {
    const data = props.data;
    //  console.log(props.data.title);
    return (
        <div className="shadow-xl card w-96 bg-base-100">
            <figure><Image width={200} height={200} layout='responsive' src={data?.img} alt={data?.title} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {data?.title}
                </h2>
                <p>{data?.short}</p>
                <div className="justify-end card-actions">
                    <Link href={`/single-blog/${data?.id}`} type="button" className="gap-2 px-4 py-3 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;