import BlogCommentForm from "../BlogCommentForm.jsx/BlogCommentForm";
import BlogCommentNested from "../BlogCommentNested/BlogCommentNested";
import BlogCommentSingle from "../BlogCommentSingle/BlogCommentSingle";
const BlogCommentSection = () => {
  return (
    <section className="mb-5">
      <div className="card bg-light">
        <div className="card-body">
          <BlogCommentForm />
          <BlogCommentNested
            name="Commenter Name"
            commentText="If you're going to lead a space frontier, it has to be government; it'll
          never be private enterprise. Because the space frontier is dangerous,
          and it's expensive, and it has unquantified risks."
          />
          <BlogCommentSingle
            name="Commenter Name"
            commentText="When I look at the universe and all the ways the universe wants to kill
          us, I find it hard to reconcile that with statements of beneficence."
          />
        </div>
      </div>
    </section>
  );
};

export default BlogCommentSection;
