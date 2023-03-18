const NavLinks = ({ menuList = [] }) => {
  return menuList.map((link) => (
    <li key={link.title}>
      <a
        href={link.href}
        className="block transition duration-300 ease-in-out hover:text-brand-500"
      >
        {link.title}
      </a>
    </li>
  ));
};

export default NavLinks;
