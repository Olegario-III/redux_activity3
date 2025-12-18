import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import UndoButton from "./components/UndoButton";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux Cart with Undo</h1>
      <ProductList />
      <Cart />
      <UndoButton />
    </div>
  );
}

export default App;
