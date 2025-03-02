interface GreetingProps {
    name: string;
    age?: number; // опциональное свойство
}

const Greeting = ({ name, age }: GreetingProps) => {
return (
    <div>
    <h1>Привет, {name}!</h1>
    {age && <p>Тебе {age} лет</p>}
    </div>
);
};

export default Greeting;