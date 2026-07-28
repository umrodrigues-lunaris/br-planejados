'use client';

import { useEffect, useState } from 'react';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

const mensagem = encodeURIComponent('Olá, vim do site e gostaria de solicitar um orçamento.');

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={clsx(styles.header, (scrolled || menuOpen) && styles.scrolled)}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/BR.png" alt="BR Planejados" width={220} height={124} priority className={styles.logoImage} />
        </Link>

        <nav className={styles.desktopNav}>
          <Link href="#servicos">Projetos</Link>
          <Link href="#em-acao">Bastidores</Link>
          <Link href="#quem-somos">Quem somos</Link>
          <Link href="#contato">Contato</Link>
          <a
            href={`https://wa.me/555198503622?text=${mensagem}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Orçamento <FiArrowUpRight />
          </a>
        </nav>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            <Link href="#servicos" onClick={() => setMenuOpen(false)}>Projetos</Link>
            <Link href="#em-acao" onClick={() => setMenuOpen(false)}>Bastidores</Link>
            <Link href="#quem-somos" onClick={() => setMenuOpen(false)}>Quem somos</Link>
            <Link href="#contato" onClick={() => setMenuOpen(false)}>Contato</Link>
            <a
              href={`https://wa.me/555198503622?text=${mensagem}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileCta}
              onClick={() => setMenuOpen(false)}
            >
              Solicitar orçamento <FiArrowUpRight />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
