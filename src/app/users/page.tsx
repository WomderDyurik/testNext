import Link from 'next/link';
import { User } from '@/app/users/types/user';
import styles from '@/app/users/styles/Users.module.css';

const getUsers = async (): Promise<User[]> => {
    return [
        { id: 1, name: 'Иван', email: 'ivan@example.com', role: 'user', createdAt: '2024-01-01' },
        { id: 2, name: 'Мария', email: 'maria@example.com', role: 'admin', createdAt: '2024-01-02' },
    ];
};

export default async function UsersPage() {
    const users = await getUsers();

    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Список пользователей</h1>
        <div className={styles.userGrid}>
        {users.map((user) => (
            <Link 
            href={`/users/${user.id}`} 
            key={user.id}
            className={styles.userCard}
            >
            <h2 className={styles.userName}>{user.name}</h2>
            <p>{user.email}</p>
            <span className={`${styles.userRole} ${
                user.role === 'admin' ? styles.adminRole : styles.userRole
            }`}>
                {user.role}
            </span>
            </Link>
        ))}
        </div>
    </div>
    );
}