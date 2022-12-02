

function Navbar() {
    return (
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Attendance System</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <a className="nav-link" aria-current="page" href="#sunday">Sunday School</a>
                  <a className="nav-link" href="#relief">Relief Society</a>
                  <a className="nav-link" href="#elders">Elders Quorum</a>
                </div>
              </div>
            </div>
          </nav>
        </header>
    );
};


export default Navbar;