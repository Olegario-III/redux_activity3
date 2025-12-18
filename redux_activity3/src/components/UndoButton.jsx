import { useDispatch, useSelector } from "react-redux";
import { undo } from "../features/cart/cartSlice";

const UndoButton = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.cart.history);

  return (
    <button
      disabled={history.length === 0}
      onClick={() => dispatch(undo())}
    >
      Undo
    </button>
  );
};

export default UndoButton;
