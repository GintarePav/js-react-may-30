const SidebarCategories = (props) => {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <p className="mb-0">Categories</p>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-6">
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!">{props.category1}</a>
              </li>
              <li>
                <a href="#!">{props.category2}</a>
              </li>
              <li>
                <a href="#!">{props.category3}</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!">{props.category4}</a>
              </li>
              <li>
                <a href="#!">{props.category5}</a>
              </li>
              <li>
                <a href="#!">{props.category6}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarCategories;
