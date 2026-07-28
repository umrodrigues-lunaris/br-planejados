'use client'

import Image from 'next/image'
import styles from './Banner.module.scss'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'

const mensagem = encodeURIComponent('Olá, vim do site e gostaria de solicitar um orçamento.')

const ease = [0.22, 1, 0.36, 1] as const

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.media}>
        <Image
          src="/banner.jpg"
          alt="Móveis sob medida"
          fill
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.scrim} />

      <div className={styles.gridLines} aria-hidden>
        <span /><span /><span /><span />
      </div>

      <div className={styles.content}>
        <motion.div
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease }}
        >
          <span className={styles.eyebrowLine} />
          Marcenaria de alto padrão
        </motion.div>

        <h1 className={styles.title}>
          <motion.span
            className={styles.titleRow}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease }}
          >
            Móveis
          </motion.span>
          <motion.span
            className={`${styles.titleRow} ${styles.outline}`}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.8, ease }}
          >
            sob medida
          </motion.span>
          <motion.span
            className={styles.titleRow}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.51, duration: 0.8, ease }}
          >
            com assinatura<em>.</em>
          </motion.span>
        </h1>

        <motion.p
          className={styles.lead}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7, ease }}
        >
          Design arquitetônico, precisão milimétrica e acabamento de alto padrão
          para ambientes que impõem presença.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78, duration: 0.7, ease }}
        >
          <a
            href={`https://wa.me/555198503622?text=${mensagem}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryCta}
          >
            Solicitar orçamento <FiArrowUpRight />
          </a>
          <a href="#servicos" className={styles.ghostCta}>
            Ver projetos
          </a>
        </motion.div>

      </div>

      <motion.a
        href="#servicos"
        className={styles.scrollHint}
        aria-label="Rolar para projetos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <FiArrowDown />
      </motion.a>
    </section>
  )
}
