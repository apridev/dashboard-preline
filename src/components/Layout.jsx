import React from 'react'
import SidebarItem from './SidebarItem'
import NavbarItem from './NavbarItem'
import FooterItem from './FooterItem'

const Layout = ({children}) => {
  return (
    <>
    <React.Fragment>
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="hidden lg:block custom-width">
          <SidebarItem />
        </div>
        <div className="flex-1 bg-slate-50 dark:bg-neutral-800 flex flex-col">
        <NavbarItem />
          <main className="p-4 flex-grow">{children}</main>
        {/* setting pedding content */}
          <FooterItem/>
        </div>
      </div>
    </React.Fragment>
    </>
  )
}

export default Layout