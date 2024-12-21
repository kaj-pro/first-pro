import "./App.css";
import LoginPage from "src/pages/login";

function App() {
  const data = {
    userName: "old username",
    passWord: "old password",
  };
  return (
    <div>
      <LoginPage initialData={data} />
    </div>
  );
}

export default App;
