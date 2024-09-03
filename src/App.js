import './App.css';
import { Calculator } from './components/Calculator';

export const App = () => {
  return (
    <>
      <main style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "fit-content", minHeight: "100vh", padding: "20px", backgroundColor: "#050505" }}>
        <Calculator />
      </main>
    </>
  );
}
