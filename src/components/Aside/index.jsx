import Image from 'next/image';
import styles from './aside.module.css';

import logo from './logo.png';
import Link from 'next/link';
import AsideLink from '../AsideLink';
import { Button } from '../Button';
import { Feed } from '../icons/Feed';
import { Account } from '../icons/Account';
import { Info } from '../icons/Info';
import { Login } from '../icons/Login';

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      {/* <img src="/logo.png" alt="Logo da Code Connect" /> */}
      <nav>
        <ul>
          <li>
            <Link href="/">
              <Image src={logo} alt="Logo da Code Connect" />
            </Link>
          </li>
          <li>
            <Button href="/publish" outline>
              Publicar
            </Button>
          </li>
          <li>
            <AsideLink href="/">
              <Feed />
              Feed
            </AsideLink>
          </li>
          <li>
            <AsideLink href="/profile">
              <Account />
              Perfil
            </AsideLink>
          </li>
          <li>
            <AsideLink href="/about">
              <Info />
              Sobre nós
            </AsideLink>
          </li>
          <li>
            <AsideLink href="/login?">
              <Login />
              Login
            </AsideLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
