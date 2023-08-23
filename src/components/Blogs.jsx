
import Card from "./Card";
import Posts from "@/Api/posts";

export default async function Blogs(){

    
    const data = await Posts();
    // console.log(data);


    return (

    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* <!-- Card --> */}
            {
                data.map((item, index)=>{
                    return (
                        <Card key={item?.id} data={item}/>
                    )
                })
            }

            
            {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
    </div>

    );
}