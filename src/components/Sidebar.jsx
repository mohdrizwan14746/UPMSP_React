import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
  <div>
  <header className="py-3 mb-4 border-bottom shadow">
    <div className="container-fluid align-items-center d-flex">
      <div className="flex-shrink-1">
        <Link to={"/login"} className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none">
          <i className="bi bi-bootstrap fs-2 text-dark" />
        </Link>
      </div>
      <div className="flex-grow-1 d-flex align-items-center">
        <form className="w-100 me-3">
          <input type="search" className="form-control" placeholder="Search..." />
        </form>
        <div className="flex-shrink-0 dropdown">
          <Link to={"/login"} className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://via.placeholder.com/28?text=!" alt="user" width={32} height={32} className="rounded-circle" />
          </Link>
          <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="dropdownUser2" style={{}}>
            <li><Link to={"/login"} className="dropdown-item" >New project...</Link></li>
            <li><Link to={"/login"} className="dropdown-item" >Settings</Link></li>
            <li><Link to={"/login"} className="dropdown-item" >Profile</Link></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li><Link to={"/login"} className="dropdown-item" >Sign out</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <div className="container-fluid pb-3 flex-grow-1 d-flex flex-column flex-sm-row overflow-auto">
    <div className="row flex-grow-sm-1 flex-grow-0">
      <aside className="col-sm-3 flex-grow-sm-1 flex-shrink-1 flex-grow-0 sticky-top pb-sm-0 pb-3">
        <div className="bg-light border rounded-3 p-1 h-100 sticky-top">
          <ul className="nav nav-pills flex-sm-column flex-row mb-auto justify-content-between text-truncate">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link px-2 text-truncate">
                <i className="bi bi-house fs-5" />
                <span className="d-none d-sm-inline">Home</span>
              </Link>
            </li>
            <li>
              <Link to={"/login"} className="nav-link px-2 text-truncate">
                <i className="bi bi-speedometer fs-5" />
                <span className="d-none d-sm-inline">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to={"/login"} className="nav-link px-2 text-truncate"><i className="bi bi-card-text fs-5" />
                <span className="d-none d-sm-inline">Orders</span> </Link>
            </li>
            <li>
              <Link to={"/login"} className="nav-link px-2 text-truncate"><i className="bi bi-bricks fs-5" />
                <span className="d-none d-sm-inline">Products</span> </Link>
            </li>
            <li>
              <Link to={"/login"} className="nav-link px-2 text-truncate"><i className="bi bi-people fs-5" />
                <span className="d-none d-sm-inline">Customers</span> </Link>
            </li>
          </ul>
        </div>
      </aside>
      <main className="col overflow-auto h-100">
        
      </main>
    </div>
  </div>
</div>

</>
  )
}

export default Sidebar