// 複数のCartItemを表示し、カート全体の管理を行う
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import CartItem from './CartItem';
import { removeItem, updateQuantity } from '../redux/slices/cartSlice';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className="cart">
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          {...item}
          // onRemove={handleRemove}
          // onUpdateQuantity={handleUpdateQuantity}
        />
      ))}
    </div>
  );
};

export default Cart;
