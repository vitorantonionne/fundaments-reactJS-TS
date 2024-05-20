import styles from '../css/Avatar.module.css'

interface AvatarPros {
  hasBorder: boolean
  src: string
  alt?: string
}

export function Avatar({hasBorder = true , src, alt}: AvatarPros) {
  return(
    <img 
    className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    src={src}
    alt={alt}
    />
  )
}