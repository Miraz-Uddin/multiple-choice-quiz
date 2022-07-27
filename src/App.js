import "./App.css";

function App() {
  const fetchQuiz = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
    );
    const data = await res.json();
    console.log(data);
  };
  return (
    <>
      <button onClick={fetchQuiz}>Start Quiz</button>
    </>
  );
}

export default App;
