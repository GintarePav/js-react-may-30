const SidebarWidget = (props) => {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <p className="mb-0">{props.title}</p>
      </div>
      <div className="card-body">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default SidebarWidget;
