import { LoginForm } from "./components/Forms/login.jsx";
import { Transactions } from "./Pages/transaction.js";
import { SingleTransaction } from "./Pages/single-transaction.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LoginForm />} />
        <Route path="/transactions" exact element={<Transactions />} />
        <Route path="/transactions/:id" exact element={<SingleTransaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
