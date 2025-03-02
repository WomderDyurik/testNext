import styles from '@/app/about/styles/About.module.css'


export default async function UserPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Страница о чем-то</h1>
            <div className={styles.userCard}>
                <h2 className={styles.userName}>Бла-бла</h2>
            </div>
        </div>
    );
}