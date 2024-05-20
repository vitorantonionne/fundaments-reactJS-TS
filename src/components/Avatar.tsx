import { ImgHTMLAttributes } from 'react'
import styles from '../css/Avatar.module.css'

interface AvatarPros extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder: boolean
  src: string
  alt?: string
  title?: string
}

export function Avatar({hasBorder = true , ...props}: AvatarPros) {
  return(
    <img 
    className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    {...props}
    />
  )
}