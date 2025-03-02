'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/components/styles/Navigation.module.css';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link 
            href="/" 
            className={pathname === '/' ? styles.activeLink : styles.link}
          >
            Главная
          </Link>
        </li>
        <li>
          <Link 
            href="/users" 
            className={pathname === '/users' ? styles.activeLink : styles.link}
          >
            Пользователи
          </Link>
        </li>
        <li>
          <Link 
            href="/about" 
            className={pathname === '/about' ? styles.activeLink : styles.link}
          >
            О нас
          </Link>
        </li>
        <li>
          <Link 
            href="/todo" 
            className={pathname === '/todo' ? styles.activeLink : styles.link}
          >
            Todo List
          </Link>
        </li>
        <li>
          <Link 
            href="/notes" 
            className={pathname === '/notes' ? styles.activeLink : styles.link}
          >
            Заметки
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;