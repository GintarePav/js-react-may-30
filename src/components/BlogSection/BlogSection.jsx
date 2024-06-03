import BlogPost from "../BlogPost/BlogPost";
import BlogCommentSection from "../BlogCommentSection/BlogCommentSection";
const BlogSection = () => {
    return(
        <div className="col-lg-8">
            <BlogPost title="Welcome to Blog Post!" subtitle="Posted on January 1, 2023 by Start Bootstrap"/>
            <BlogCommentSection />
        </div>
    )
}

export default BlogSection;