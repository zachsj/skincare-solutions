import { NavLink } from "react-router-dom";

const HeaderNavigationBar = () => {
  return (
    <section className="header-navigation-bar">
      <nav className="navbar navbar-expand-lg bg-body-primary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              backgroundColor: "#5233", // Darker background
              border: "1px solid #222", // Darker border
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {[
                { to: "/", label: "Home" },
                { to: "/blog", label: "Blog" },
                { to: "/resources", label: "Resources" },
                { to: "/faq", label: "FAQ" },
              ].map(({ to, label }) => (
                <li className="nav-item" key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active fw-bold" : ""}`
                    }
                    style={({ isActive }) => ({
                      color: isActive ? "" : "#111",
                      textAlign: "left",
                      paddingBottom: label === "FAQ" ? "40px" : undefined,
                    })}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default HeaderNavigationBar;
