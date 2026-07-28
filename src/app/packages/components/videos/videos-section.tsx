'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlay, FiVolume2 } from 'react-icons/fi'
import styles from './VideosSection.module.scss'

const candidatos = ['/videos/video1.mp4', '/videos/video2.mp4', '/videos/video3.mp4']

export default function VideosSection() {
  const [videos, setVideos] = useState<string[]>([])

  useEffect(() => {
    let mounted = true
    const exists = async (url: string) => {
      try {
        const head = await fetch(url, { method: 'HEAD', cache: 'no-store' })
        if (head.ok) return true
        if (head.status === 405) {
          const getResp = await fetch(url, { method: 'GET', cache: 'no-store' })
          return getResp.ok
        }
        return false
      } catch {
        return false
      }
    }
    Promise.all(candidatos.map(async (src) => ((await exists(src)) ? src : null))).then(
      (results) => {
        if (mounted) setVideos(results.filter(Boolean) as string[])
      }
    )
    return () => {
      mounted = false
    }
  }, [])

  if (!videos.length) return null

  return (
    <section className={styles.section} id="em-acao">
      <div className={styles.glow} aria-hidden />
      <div className={styles.inner}>
        <motion.div
          className={styles.head}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.eyebrow}>Bastidores</span>
          <h2 className={styles.title}>
            O trabalho <span className={styles.outline}>em movimento</span>
          </h2>
          <p className={styles.lead}>
            Dê o play e sinta o padrão de execução — registros reais, direto da obra,
            com som ambiente.
          </p>
        </motion.div>

        <div className={styles.showcase}>
          {videos.map((src, i) => (
            <motion.div
              key={src}
              className={styles.item}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <VideoCard src={src} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function VideoCard({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [started, setStarted] = useState(false)

  const toggle = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setStarted(true)
    } else {
      video.pause()
    }
  }

  return (
    <div className={styles.card}>
      <span className={styles.frame} aria-hidden />
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        playsInline
        controls={started}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        className={styles.video}
        onClick={(e) => {
          if (!started) {
            e.preventDefault()
            toggle()
          }
        }}
      />

      {!playing && (
        <button className={styles.playOverlay} onClick={toggle} aria-label="Reproduzir vídeo">
          <span className={styles.playButton}>
            <FiPlay />
          </span>
          <span className={styles.soundChip}>
            <FiVolume2 /> com som
          </span>
        </button>
      )}
    </div>
  )
}
