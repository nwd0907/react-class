import Head from 'next/head'
import styles from '../styles/Notice.module.css'

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.title}>공지사항 등록</h1>
        글쓴이: <input type="text" className={styles.inputbox} />
        비밀번호: <input type="password" className={styles.inputbox} />
        제목: <input type="text" className={styles.inputbox} />
        내용: <textarea className={styles.inputbox} rows={10} />
        <div className={styles.buttonwrapper}>
          <button>등록완료</button>
        </div>
      </div>
    </div>
  )
}
