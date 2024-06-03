export const BlogLabel = (props) => {
  return (
    <a
      className="badge bg-secondary text-decoration-none link-light me-1"
      href="#!"
    >
      {props.label}
    </a>
  );
};

export const BlogFigure = (props) => {
  return (
    <figure className="mb-4">
      <img className="img-fluid rounded" src={props.src} alt={props.alt} />
    </figure>
  );
};

export const BlogSubheader = (props) => {
  return <h2 className="fw-bolder mb-4 mt-5">{props.text}</h2>;
};

export const BlogParagraph = (props) => {
  return <p className="fs-5 mb-4">{props.text}</p>;
};

const BlogPost = (props) => {
  return (
    <article>
      <header className="mb-4">
        <h1 className="fw-bolder mb-1">{props.title}</h1>
        <p className="text-muted fst-italic mb-2">{props.subtitle}</p>
        <BlogLabel label="Web Design" />
        <BlogLabel label="Freebies" />
      </header>

      <BlogFigure
        src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"
        alt="dummy image"
      />

      <section className="mb-5">
        <BlogParagraph
          text="Science is an enterprise that should be cherished as an activity of
          the free human mind. Because it transforms who we are, how we live,
          and it gives us an understanding of our place in the universe."
        />
        <BlogParagraph
          text="
          The universe is large and old, and the ingredients for life as we know
          it are everywhere, so there's no reason to think that Earth would be
          unique in that regard. Whether of not the life became intelligent is a
          different question, and we'll see if we find that."
        />
        <BlogParagraph
          text="If you get asteroids about a kilometer in size, those are large enough
          and carry enough energy into our system to disrupt transportation,
          communication, the food chains, and that can be a really bad day on
          Earth."
        />
        <BlogSubheader text="I have odd cosmic thoughts every day" />
        <BlogParagraph
          text="For me, the most fascinating interface is Twitter. I have odd cosmic
          thoughts every day and I realized I could hold them to myself or share
          them with people who might be interested."
        />
        <BlogParagraph
          text="Venus has a runaway greenhouse effect. I kind of want to know what
          happened there because we're twirling knobs here on Earth without
          knowing the consequences of it. Mars once had running water. It's bone
          dry today. Something bad happened there as well."
        />
      </section>
    </article>
  );
};

export default BlogPost;