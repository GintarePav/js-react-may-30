import BlogPost from "../BlogPost/BlogPost";
import BlogCommentSection from "../BlogCommentSection/BlogCommentSection";
const BlogSection = () => {
    return(
        <div className="col-lg-8">
            <BlogPost />
            <BlogCommentSection />
        </div>
    )
}

export default BlogSection;