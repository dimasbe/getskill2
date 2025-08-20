import { useState } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <div id="header-fixed-height"></div>
      <div id="sticky-header" className="tg-header__area">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="tgmenu__wrap">
                <nav className="tgmenu__nav">

                  {/* mobile-header-bar: hamburger kiri, logo kanan (≤767px) */}
                  <div className="mobile-header-bar d-flex d-xl-none justify-content-between align-items-center">
                    <div className="hamburger-menu" onClick={toggleSidebar}>&#9776;</div>
                    <div className="logo-mobile" style={{display: 'none'}}>
                      <a href="/">
                        <img 
                          src="../../../assets/img/logo/get-skill/landscape.png" 
                          width="55px" 
                          alt="Logo" 
                        />
                      </a>
                    </div>
                  </div>
                  {/* end mobile-header-bar */}

                  {/* logo desktop */}
                  <div className="logo">
                    <a href="/">
                      <img 
                        src="/src/assets/img/logo/get-skill/landscape.png" 
                        width="200px" 
                        alt="Logo" 
                      />
                    </a>
                  </div>

                  {/* hamburger fallback */}
                  <div className="hamburger-menu d-block d-xl-none" onClick={toggleSidebar}>&#9776;</div>

                  {/* sidebar-menu */}
                  <div className={`sidebar-menu ${isSidebarOpen ? 'active' : ''}`} id="sidebarMenu">
                    <a href="/" className={window.location.pathname === '/' ? 'active' : ''}>
                      Beranda
                    </a>
                    {/* Session handling perlu disesuaikan dengan state management React */}
                    <a 
                      href="/dashboard/profile" 
                      className={window.location.pathname === '/dashboard/profile' ? 'active' : ''}
                    >
                      Dashboard
                    </a>
                    <a 
                      href="/courses" 
                      className={window.location.pathname === '/courses' ? 'active' : ''}
                    >
                      Kursus
                    </a>
                    <a 
                      href="/events" 
                      className={window.location.pathname === '/events' ? 'active' : ''}
                    >
                      Event
                    </a>
                    <a 
                      href="/industrial-class" 
                      className={window.location.pathname === '/industrial-class' ? 'active' : ''}
                    >
                      Kelas Industri
                    </a>
                    <a 
                      href="/news" 
                      className={window.location.pathname === '/news' ? 'active' : ''}
                    >
                      Berita
                    </a>
                    <a 
                      href="/faqs" 
                      className={window.location.pathname === '/faqs' ? 'active' : ''}
                    >
                      FAQ
                    </a>
                    {/* Logout button - perlu disesuaikan dengan authentication React */}
                    <form action="/logout" method="POST">
                      <button type="submit" className="btn-logout">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="icon icon-tabler icons-tabler-outline icon-tabler-logout-2"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
                          <path d="M15 12h-12l3 -3" />
                          <path d="M6 15l-3 -3" />
                        </svg>
                        Keluar
                      </button>
                    </form>
                    <a href="/login">Masuk</a>
                  </div>

                  {/* desktop navbar */}
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                    <ul className="navigation gap-3">
                      <li className={`menu-item ${window.location.pathname === '/' ? 'active' : ''}`}>
                        <a href="/">Beranda</a>
                      </li>
                      <li className={`menu-item ${window.location.pathname === '/courses' ? 'active' : ''}`}>
                        <a href="/courses">Kursus</a>
                      </li>
                      <li className={`menu-item ${window.location.pathname === '/events' ? 'active' : ''}`}>
                        <a href="/events">Event</a>
                      </li>
                      <li className={`menu-item ${window.location.pathname === '/industrial-class' ? 'active' : ''}`}>
                        <a href="/industrial-class">Kelas Industri</a>
                      </li>
                      <li className={`menu-item ${window.location.pathname === '/news' ? 'active' : ''}`}>
                        <a href="/news">Berita</a>
                      </li>
                      <li className={`menu-item ${window.location.pathname === '/faqs' ? 'active' : ''}`}>
                        <a href="/faqs">FAQ</a>
                      </li>
                    </ul>
                  </div>

                  {/* Category Dropdown */}
                  <div className="tgmenu__search d-none d-md-block">
                    <form action="/courses" method="GET" className="tgmenu__search-form">
                      <div className="select-grp">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path 
                            d="M10.992 13.25C10.5778 13.25 10.242 13.5858 10.242 14C10.242 14.4142 10.5778 14.75 10.992 14.75H16.992C17.4062 14.75 17.742 14.4142 17.742 14C17.742 13.5858 17.4062 13.25 16.992 13.25H10.992Z" 
                            fill="currentColor" 
                          />
                        </svg>
                        <div className="select-container">
                          <div className="select-option" id="selectedCategory">
                            Pilih Kategori
                          </div>
                          <div className="dropdown" id="dropdownMenu">
                            <div className="category">
                              Kategori 1
                              <div className="subcategory">
                                <div className="subcategory-item">Sub Kategori</div>
                                <div className="subcategory-item">Sub Kategori</div>
                                <div className="subcategory-item">Sub Kategori</div>
                              </div>
                            </div>
                            <div className="category">
                              Kategori 2
                              <div className="subcategory">
                                <div className="subcategory-item">Sub Kategori</div>
                                <div className="subcategory-item">Sub Kategori</div>
                                <div className="subcategory-item">Sub Kategori</div>
                              </div>
                            </div>
                            <div className="category">
                              Kategori 3
                              <div className="subcategory">
                                <div className="subcategory-item">Sub Kategori</div>
                                <div className="subcategory-item">Sub Kategori</div>
                                <div className="subcategory-item">Sub Kategori</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input-grp">
                        <input 
                          type="text" 
                          id="search-name" 
                          name="title"
                          placeholder="Pencarian kursus . . ." 
                        />
                        <button type="submit">
                          <i className="flaticon-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="tgmenu__action">
                    <ul className="list-wrap">
                      {/* User profile section - perlu disesuaikan dengan state management React */}
                      {/* <li>
                        <form action="/logout" method="POST">
                          <div className="user-profile d-flex align-items-center">
                            <a 
                              href="/dashboard/profile" 
                              className="profile-link" 
                              onClick={(e) => e.stopPropagation()}
                            >
                              <img 
                                src="" 
                                className="rounded-circle" 
                                width="40" 
                                height="40" 
                                alt="" 
                                id="profile-image" 
                              />
                            </a>
                            <button 
                              type="submit" 
                              className="btn shadow-none py-3 ms-3" 
                              style={{background: '#e30000'}}
                            >
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="icon icon-tabler icons-tabler-outline icon-tabler-logout-2"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
                                <path d="M15 12h-12l3 -3" />
                                <path d="M6 15l-3 -3" />
                              </svg>
                              Keluar
                            </button>
                          </div>
                        </form>
                      </li> */}
                      <li className="header-btn login-btn">
                        <a href="/login">Masuk</a>
                      </li>
                    </ul>
                  </div>

                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;