import Header from "./components/header";
import Content from "./components/content";
import Form from "./components/form";
function App() {
  return (
    <div className="pt-10 flex flex-col items-center justify-center gap-y-10">
      <Header />
      <Form />
      <Content />
    </div>
  );
}

export default App;
