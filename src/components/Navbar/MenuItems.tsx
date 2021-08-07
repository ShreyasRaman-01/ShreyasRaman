//array of menu iterms in the navigation bar: preserve centralized record of menu names
//exporting the navbar data: to be imported in Navbar.tsx
export const MenuItems: {
    page_name: string; url: string; cName: string;}[]
=  [ {page_name:'About', url: '#', cName: 'nav-links'},
     {page_name: 'Experiences', url:'#', cName:'nav-links'},
     {page_name: 'Projects & Research', url:'#',cName:'nav-links'},
     {page_name: 'Skills', url:'#',cName:'nav-links'},
     {page_name: 'Blog', url:'#',cName:'nav-links'},
     {page_name: 'Contact Me', url:'#',cName:'nav-links'}
   ]
       