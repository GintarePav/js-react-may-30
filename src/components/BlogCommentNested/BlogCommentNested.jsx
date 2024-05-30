import BlogCommentChild from "../BlogCommentChild/BlogCommentChild";
import BlogCommentSingle from "../BlogCommentSingle/BlogCommentSingle";

const BlogCommentNested = (props) => {
  return (
    <div className="d-flex mb-4">
      <div className="flex-shrink-0">
        <img
          className="rounded-circle"
          src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
          alt="..."
        />
      </div>
      <div className="ms-3">
        <p className="fw-bold mb-1">{props.name}</p>
        <p>{props.commentText}</p>
        <BlogCommentChild
          name="Commenter Name"
          commentText="And under those conditions, you cannot establish a capital-market
        evaluation of that enterprise. You can't get investors."
        ></BlogCommentChild>
        <BlogCommentChild
          name="Commenter Name"
          commentText="When you put money directly to a problem, it makes a good headline."
        ></BlogCommentChild>
      </div>
    </div>
  );
};

export default BlogCommentNested;
