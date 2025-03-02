import Greeting from '@/components/Greeting';
import UserCard from '@/components/UserCard'

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <Greeting name="Alex" age={32} />
      <UserCard userName="Alex" email="mail@mail.mail" isAdmin={true} joinDate={new Date}/>
    </main>
  );
}