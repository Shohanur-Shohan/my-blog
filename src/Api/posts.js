export default async function Posts(){
    
    const res = await fetch('https://basic-blog.teamrabbil.com/api/post-newest');
    if(res.status===200){
        const data = await res.json();
        return data;
    }else{
        return [];
    }
    
}