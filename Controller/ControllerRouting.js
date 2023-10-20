const  blog = require("../Store/BlogStore")

const BlogData = (req,res)=>{
    const getCategory = req.query.Category;
    // const getId= req.params.id;
    // console.log(getCategory,getId)
    // const filterCategory = blog.filter((item)=>item.Category==getCategory && item.id==getId)
    const filterCategory = blog.filter((item)=>item.Category==getCategory)
    res.send(filterCategory);
} 
module.exports =BlogData

// http://localhost:9000/api/main/blog/24/?Category=Bollywood
// http://localhost:9000/api/main/blog/24/?Category=Hollywood
// http://localhost:9000/api/main/blog/24/?Category=Food
// http://localhost:9000/api/main/blog/24/?Category=Technology
// http://localhost:9000/api/main/blog/24/?Category=Fitness
// http://localhost:9000/api/main/blog/