import { Routes, Route } from "react-router-dom";
import ChatPage from '../src/components/ChatPage'
import Home from "./Home";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="*" element={<ErrorPage/>} />
      
    </Routes>
  );
}

export default App;
