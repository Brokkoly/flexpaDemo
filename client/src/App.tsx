import "./App.css";
import { EOBInfo } from "./EOBInfo";
import { LoginProvider } from "./Login";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginProvider existingAccessTokenInfo={undefined}>
          <EOBInfo />
        </LoginProvider>
      </header>
    </div>
  );
}

export default App;
