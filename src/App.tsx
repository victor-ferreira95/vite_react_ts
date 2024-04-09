import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import "./global.css"
import styles from "./App.module.css"
import { PostType } from './components/Post'

const posts: PostType[] = [
  {
    id: 1,
    author: { avatarUrl: "https://github.com/diego3g.png", name: "Diego Fernandes", role: "CTO @Rocketseat" },
    publishedAt: new Date("2023-05-03 20:00:00"),
    content: [
      { type: "paragraph", content: "Fala galera!" },
      { type: "paragraph", content: "Acabei se subir um projeto no meu portifa. É um projeto que eu fiz no ignite." },
      { type: "link", content: "jane.design/doctorcare" },
    ]
  },
  {
    id: 2,
    author: { avatarUrl: "https://github.com/maykbrito.png", name: "Mayk Brito", role: "Educador @Rocketseat" },
    publishedAt: new Date("2023-07-10 21:00:00"),
    content: [
      { type: "paragraph", content: "Fala galera!" },
      { type: "paragraph", content: "Acabei se subir um projeto no meu portifa. É um projeto que eu fiz no ignite." },
      { type: "link", content: "jane.design/doctorcare" },
    ]
  },
  {
    id: 3,
    author: { avatarUrl: "https://github.com/victor-ferreira95.png", name: "Victor Ferreira", role: "Aluno @Rocketseat" },
    publishedAt: new Date("2023-08-10 16:00:00"),
    content: [
      { type: "paragraph", content: "Fala galera!" },
      { type: "paragraph", content: "Acabei se subir um projeto no meu portifa. É um projeto que eu fiz no ignite." },
      { type: "link", content: "jane.design/doctorcare" },
    ]
  },
]


function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => <Post
              key={post.id}
              post={post}
            />
            )
          }
        </main>
      </div>
    </div>
  )
}

export default App
