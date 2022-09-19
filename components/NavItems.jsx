import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem = ({ text, href, active }) => {
  const router = useRouter();
  return (
    <div>
      <Link href={href}>
        <a
          className={`nav__item ${active ? 'active' : ''} ${
            router.pathname === href ? 'linkActive' : ''
          } `}
        >
          {text}
        </a>
      </Link>
    </div>
  );
};

export default NavItem;
