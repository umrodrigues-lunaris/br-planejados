'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.scss';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';

const mensagem = encodeURIComponent('Olá, vim do site e gostaria de solicitar um orçamento.');
const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  return (
    <footer className={styles.footer} id="contato">
      <div className={styles.inner}>
        <motion.h2
          className={styles.headline}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
        >
          Vamos criar algo <span className={styles.outline}>extraordinário</span><em>.</em>
        </motion.h2>

        <motion.a
          href={`https://wa.me/555198503622?text=${mensagem}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
        >
          Solicitar orçamento <FiArrowUpRight />
        </motion.a>

        <div className={styles.socials}>
          <Link href="https://www.instagram.com/br.planejados" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </Link>
          <Link href={`https://wa.me/555198503622?text=${mensagem}`} target="_blank" aria-label="WhatsApp">
            <FaWhatsapp />
          </Link>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} BR Planejados</span>
          <span className={styles.dot} />
          <span>
            Desenvolvido por{' '}
            <Link href="https://www.lunaristech.com.br" target="_blank" rel="noopener noreferrer">
              Lunaris Tech
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
