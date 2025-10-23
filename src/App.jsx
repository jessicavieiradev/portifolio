import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="bg-fundo-principal text-texto-principal w-full min-h-screen relative">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
