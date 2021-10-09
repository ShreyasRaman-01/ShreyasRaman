//array of menu iterms in the navigation bar: preserve centralized record of menu names
//exporting the navbar data: to be imported in Navbar.tsx
export const MenuItems: {
  page_name: string;
  url: string;
}[] = [
  { page_name: "About", url: "/about" },
  // { page_name: "Experiences", url: "/experiences" },
  { page_name: "Projects & Research", url: "/projects" },
  { page_name: "Skills", url: "/skills" },
  // { page_name: "Blog", url: "/blog" },
  // { page_name: "Contact Me", url: "/contact-me" },
];
