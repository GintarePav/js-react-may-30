const BlogCommentSingle = (props) => {
  return (
    <div className="d-flex">
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
      </div>
    </div>
  );
};

export default BlogCommentSingle;
