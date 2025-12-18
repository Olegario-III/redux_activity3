import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const products = [
  { id: 1, name: "Apple", price: 2 },
  { id: 2, name: "Banana", price: 1 },
  { id: 3, name: "Orange", price: 3 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} (${p.price})
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => dispatch(addItem(p))}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
