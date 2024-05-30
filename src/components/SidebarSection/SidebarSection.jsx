import SidebarSearch from "../SidebarSearch/SidebarSearch";
import SidebarCategories from "../SidebarCategories/SidebarCategories";
import SidebarWidget from "../SidebarWidget/SidebarWidget";

const SidebarSection = () => {
  return (
    <div className="col-lg-4">
      <SidebarSearch />
      <SidebarCategories
        category1="Web Design"
        category2="HTML"
        category3="Freebies"
        category4="JavaScript"
        category5="CSS"
        category6="Tutorials"
      />
      <SidebarWidget
        title="Side Widget"
        text="You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!"
      />
    </div>
  );
};

export default SidebarSection;
