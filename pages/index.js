import { useState } from "react";

function Header(props) {
  console.log(props.title);
  return <h1>{`Cool ${props.title || "Default Title"}`}</h1>;
}

function Button({ title }) {
  const [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <button onClick={handleClick}>
      {title || "Like"} ({likes})
    </button>
  );
}

export default function HomePage() {
  const names = ["Andia", "Budi", "Cakra"];
  return (
    <div>
      <Header title="React <3<3" />
      <Header title="Vue <3<3" />
      <Header />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <Button />
    </div>
  );
}
