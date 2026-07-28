'use client';

import { motion } from 'framer-motion';
import styles from './AboutSection.module.scss';

const ease = [0.22, 1, 0.36, 1] as const;

const highlights = [
  {
    num: '01',
    title: '+3 anos de mercado',
    text: 'Experiência consolidada em projetos sob medida de alto padrão.',
  },
  {
    num: '02',
    title: 'Acabamento impecável',
    text: 'Detalhes finos, execução refinada e rigor absoluto nos prazos.',
  },
  {
    num: '03',
    title: 'Materiais premium',
    text: 'Durabilidade e presença de alto padrão, sem abrir mão da qualidade.',
  },
];

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="quem-somos">
      <span className={styles.watermark} aria-hidden>BR</span>

      <div className={styles.content}>
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
        >
          <div>
            <span className={styles.eyebrow}>Quem somos</span>
            <h2 className={styles.title}>
              Arquitetura, precisão e <span className={styles.accent}>personalidade</span> em cada projeto.
            </h2>
          </div>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.copy}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <p>
              Há três anos no mercado, somos especialistas na fabricação de móveis sob medida, transformando ambientes com design, funcionalidade e requinte. Contamos com mão de obra altamente qualificada e dispomos de todos os equipamentos necessários para produzir peças de altíssimo padrão.
            </p>
            <p>
              Nossa prioridade é unir estética e durabilidade, utilizando apenas materiais de qualidade superior — um compromisso do qual não abrimos mão. Prezamos pelo cumprimento rigoroso dos prazos e pela entrega de um acabamento impecável, garantindo que cada projeto reflita a personalidade e o bom gosto de nossos clientes.
            </p>
          </motion.div>

          <div className={styles.highlights}>
            {highlights.map((item, i) => (
              <motion.div
                key={item.num}
                className={styles.card}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
              >
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
