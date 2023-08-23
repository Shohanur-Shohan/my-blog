export default async function Categories(){
      
    const res = await fetch('https://basic-blog.teamrabbil.com/api/post-categories');
    if(res.status===200){
        const data = await res.json();
        return data;
    }else{
        return [];
    }
    
}