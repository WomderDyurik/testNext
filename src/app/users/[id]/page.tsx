import { User } from '@/app/users/types/user';
import { notFound } from 'next/navigation';
import styles from '@/app/users/styles/Users.module.css';

interface UserPageProps {
    params: {
        id: string;
    };
}

const getUser = async (id: string): Promise<User | null> => {
    const users = [
        { id: 1, name: 'Иван', email: 'ivan@example.com', role: 'user' as const, createdAt: '2024-01-01' },
        { id: 2, name: 'Мария', email: 'maria@example.com', role: 'admin' as const, createdAt: '2024-01-02' },
    ];
    
    return users.find(user => user.id === parseInt(id)) || null;
};

export default async function UserPage({ params }: UserPageProps) {
    const user = await getUser(params.id);

    if (!user) {
        notFound();
    }

    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Профиль пользователя</h1>
        <div className={styles.userCard}>
            <h2 className={styles.userName}>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Роль: <span className={user.role === 'admin' ? styles.adminRole : styles.userRole}>{user.role}</span></p>
            <p>Дата регистрации: {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
        </div>
    );
}