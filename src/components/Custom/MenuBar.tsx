import React from 'react'

const MenuBar = (props : any) => {
  return (
    <div className="App">
    {props.sidebarOpen && (
      <div
        className={`address-overlay ${props.sidebarOpen ? "open" : ""}`}
        onClick={props.toggleSidebar}
      />
    )}
    <div className={`menu-sidebar ${props.sidebarOpen ? "open" : ""}`}>
      <h6 className="mb-3">
        {props.heading}
        <span
          onClick={props.toggleSidebar}
          className="float-end open-sidebar-btn"
        >
          <i className="fa-solid fa-xmark"></i>
        </span>
      </h6>
      {props.children}
    </div>
  </div>

  )
}

export default MenuBar