import ChatPage from "./pages/ChatPage";

const App = () => {
  const id = Math.floor(Math.random() * 1000);
  return <ChatPage id={id.toString()} />;
};

export default App;
