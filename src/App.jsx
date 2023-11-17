import "./App.css";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import Main from "./page/Main";
import { Route, Routes } from "react-router-dom";
import Statistic from './page/Statistic';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/statistic"} element={<Statistic />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
