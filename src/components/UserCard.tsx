interface UserCardProps {
    userName: string;
    email: string;
    isAdmin: boolean;
    joinDate: Date;
}

const Greeting = ({ userName, email, isAdmin, joinDate }: UserCardProps) => {
    return (
        <div>
        <h1>Привет, {userName}!</h1>
        <p>Твой email: {email}</p>
        {isAdmin && <p>Присоединился {joinDate.toLocaleDateString()}</p>}
        </div>
    );
    };
    
    export default Greeting;