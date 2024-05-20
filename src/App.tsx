import { Header } from './components/Header'
import { Post , PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './css/App.module.css'
import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:'https://github.com/vitorantonionne.png',
      name: 'Vitor Antonionne',
      role: 'Dev Junior front-end',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
     {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-04-29 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://github.com/celsoernani.png',
      name: 'Celso Ernani',
      role: 'Dev Senior front-end',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
     {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-04-010 21:00:00')
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

