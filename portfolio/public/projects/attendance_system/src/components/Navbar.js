
//Fix navbar brand to go home instead of unknown file path

function Navbar({active, setActive}) {
  
    return (
        <header>
          <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href={window.location.origin}>YSA 17th Ward Attendance</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <a className={active === "sunday" || (active !=="relief" && active !=="elders") ?  "active nav-link" : 'nav-link'} href="#sunday"  onClick={() => setActive("sunday")}>Sunday School</a>
                  <a className={active === "relief" ? "active nav-link" : 'nav-link'} href="#relief" onClick={() => setActive("relief")}>Relief Society</a>
                  <a className={active === "elders" ? "active nav-link" : 'nav-link'} href="#elders" onClick={() => setActive("elders")}>Elders Quorum</a>
                </div>
              </div>
            </div>
          </nav>
        </header>
    );
};


export default Navbar;