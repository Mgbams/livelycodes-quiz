import QuizCategories from "./components/QuizCategories";

const App = () => {
  const style = {
    textAlign: "center",
    color: "#490B3D",
    fontSize: 45,
    marginTop: "20px",
  };

  return (
    <div>
      <h1 style={style}>Take tests from different fields</h1>
      <QuizCategories />
    </div>
  );
};

export default App;
