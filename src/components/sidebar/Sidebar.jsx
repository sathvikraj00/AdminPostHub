import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">
                About Me
            </span>
            <img className="img" src="https://wallpaperaccess.com/full/7310.jpg"
            alt="no img"
            />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo deserunt sequi alias expedita incidunt, quam dolores maxime quo corrupti blanditiis temporibus, ad cumque molestias minus? Corporis rerum distinctio commodi ut!
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-x-twitter"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-meta"></i>
            </div>
        </div>
        </div>
  )
}
