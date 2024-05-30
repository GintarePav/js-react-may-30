import BlogSection from "../BlogSection/BlogSection";
import SidebarSection from "../SidebarSection/SidebarSection";

const Main = () => {
    return(
        <main className="container mt-5">
            <div className="row">
                <BlogSection />
                <SidebarSection />
            </div>
        </main>
    )
}

export default Main;