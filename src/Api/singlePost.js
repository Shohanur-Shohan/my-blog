export default async function SinglePost(id){
    // console.log(id)
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);
    if(res.status===200){
        const data = await res.json();
        return data;
    }else{
        return [];
    }
    
}