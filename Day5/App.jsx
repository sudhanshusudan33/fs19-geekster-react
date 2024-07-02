function App() {
  //let displayText = "Please type to show here";

  const [text, setText] = useState("Please type to show here");

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <p>{text}</p>
    </div>
  );
}
