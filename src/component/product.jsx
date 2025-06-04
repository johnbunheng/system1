import { useState, useEffect } from 'react';
import axios from 'axios';
import Img2 from '../img/ice.png';
import Img3 from '/src/img/coca.png';
import Img4 from '/src/img/wurk.png';
import Img5 from '/src/img/krud.webp';
import Img6 from '/src/img/champian.png';
import Img7 from '/src/img/bakas.jpg';
import Img8 from '/src/img/pokari.png';
import Img9 from '/src/img/express.png';
import Img10 from '/src/img/idol.jpg';
import Img11 from '/src/img/bostrong.jpg';
import Img12 from '/src/img/Carabao-Energy-Drink-768x768-1.webp';
import Img13 from '/src/img/Pepsi-330ml-Can.avif';
import Img14 from '/src/img/1.png';
import Img15 from '/src/img/2.png';
import Img16 from '/src/img/3.png';
import Img17 from '/src/img/4.png';
import Img18 from '/src/img/5.png';
import Img19 from '/src/img/Fresh beef burger isolated -1.png';

const Product = () => {
  const [itemsdrink, setItemsDrink] = useState([
    { id: '1', name: 'Ice', price: '1.00', images: Img2 },
    { id: '2', name: 'Coca-Cola', price: '1.00', images: Img3 },
    { id: '3', name: 'Work', price: '1.00', images: Img4 },
    { id: '4', name: 'Krud', price: '1.00', images: Img5 },
    { id: '5', name: 'Champian', price: '1.00', images: Img6 },
    { id: '6', name: 'Bacchus', price: '1.00', images: Img7 },
    { id: '7', name: 'Pocari', price: '1.00', images: Img8 },
    { id: '8', name: 'Express', price: '1.00', images: Img9 },
    { id: '9', name: 'Idol', price: '1.00', images: Img10 },
    { id: '10', name: 'Bostrong', price: '1.00', images: Img11 },
    { id: '11', name: 'Carabao', price: '1.00', images: Img12 },
    { id: '12', name: 'Pepsi', price: '1.00.Batch', images: Img13 },
  ]);

  const [itemsfood, setItemsFood] = useState([
    { id: '1', name: 'Burger-Beef', price: '1.00', images: Img14 },
    { id: '2', name: 'Burger-Stack', price: '1.00', images: Img15 },
    { id: '3', name: 'Burger-Chicken', price: '1.00', images: Img16 },
    { id: '4', name: 'Burger-Yee', price: '1.00', images: Img17 },
    { id: '5', name: 'Burger-taa', price: '1.00', images: Img18 },
    { id: '6', name: 'Burger-lov', price: '1.00', images: Img19 },
  ]);

  const [customItems, setCustomItems] = useState(() => {
    const savedItems = localStorage.getItem('products');
    return savedItems
      ? JSON.parse(savedItems).map((item) => ({
          id: item.id || Date.now().toString(),
          name: item.proname,
          price: item.price,
          images: item.file,
        }))
      : [];
  });

  const [materials, setMaterial] = useState([]);
  const [beers, setBeer] = useState([]);
  const [currentItems, setCurrentItems] = useState(itemsdrink);

  // Load orderpro from localStorage
  const [orderpro, setOrderpro] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update localStorage when orderpro changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(orderpro));
  }, [orderpro]);

  // Load products from Addproduct.js
  useEffect(() => {
    const savedItems = localStorage.getItem('products');
    if (savedItems) {
      setCustomItems(
        JSON.parse(savedItems).map((item) => ({
          id: item.id || Date.now().toString(),
          name: item.proname,
          price: item.price,
          images: item.file,
        }))
      );
    }
  }, []);

  // Load data from APIs
  useEffect(() => {
    // API for materials
    axios
      .get('https://api.escuelajs.co/api/v1/products')
      .then((res) => {
        const formattedData = res.data.map((item) => ({
          id: item.id.toString(),
          name: item.title,
          price: item.price.toString(),
          images: item.images[0] || Img2,
        }));
        setMaterial(formattedData);
      })
      .catch((error) => {
        console.log('Error fetching materials:', error);
        setMaterial(customItems); // Fallback to customItems
      });

    // API for beers
    axios
      .get('https://api.sampleapis.com/beers/ale')
      .then((res) => {
        const updatedData = res.data.map((item) => ({
          id: item.id.toString(),
          name: item.name,
          price: item.price || '1.00',
          images: item.image || Img2,
        }));
        setBeer(updatedData);
      })
      .catch((error) => console.log('Error fetching beers:', error));
  }, [customItems]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (category === 'food') {
      setCurrentItems(itemsfood);
    } else if (category === 'drink') {
      setCurrentItems(itemsdrink);
    } else if (category === 'material') {
      setCurrentItems(materials);
    } else if (category === 'beer') {
      setCurrentItems(beers);
    } else if (category === 'custom') {
      setCurrentItems(customItems);
    }
  };

  const addToCart = (item) => {
    const isInCart = orderpro.some((cartItem) => cartItem.id === item.id);
    if (isInCart) {
      alert('This product is already in the cart!');
      return;
    }

    const newCartItems = [...orderpro, item];
    setOrderpro(newCartItems);
    alert(`Added ${item.name} to cart successfully!`);
  };

  const removeFromCart = (id) => {
    if (window.confirm('Are you sure you want to remove this product from the cart?')) {
      const updatedCart = orderpro.filter((item) => item.id !== id);
      setOrderpro(updatedCart);
    }
  };

  // Calculate total products and total price
  const totalProducts = orderpro.length;
  const totalPrice = orderpro
    .reduce((sum, item) => sum + parseFloat(item.price || 0), 0)
    .toFixed(2);

  return (
    <div className="container mt-5 ml-64 p-3 flex-1 w-4/5 bg-slate-100 rounded border border-gray-700">
      <div className="w-3/6 flex justify-around">
        <p className="text-xs mt-2">Products</p>
        <input
          type="search"
          placeholder="Search"
          className="border border-gray-700 text-sm outline-none p-2 h-8 rounded w-44"
        />
        <select
          onChange={handleCategoryChange}
          className="border border-gray-700 h-8 w-36 rounded text-sm"
        >
          <option value="drink">Select Category</option>
          <option value="drink">Drinks</option>
          <option value="beer">Beers</option>
          <option value="material">Materials</option>
          <option value="food">Food</option>
          <option value="custom">Custom Products</option>
        </select>
        <button type="button" className="bg-cyan-600 text-white p-1 text-sm h-8 rounded w-14">
          Search
        </button>
      </div>
      <div className="w-4/6 grid grid-cols-3 m-4 border border-gray-500 rounded xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:ml-10">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="card w-56 h-96 m-5 justify-between bg-gray-300 justify-items-center shadow-lg rounded p-2"
          >
            <img
              className="w-44 h-44 bg-white object-contain rounded items-center mt-2 bg-none"
              src={item.images}
              alt={item.name}
            />
            <div className="text-start w-full p-3">
              <h1>ID: {item.id}</h1>
              <h1 className="text-green-600">{item.name}</h1>
              <h1 className="text-red-700">{item.price}$</h1>
              <button
                className="bg-cyan-600 text-white rounded text-xs p-1 h-8 hover:bg-cyan-700"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="w-80 p-3 absolute right-20 top-40 bg-gray-100 border border-gray-500 rounded">
        <h2 className="text-lg font-semibold mb-2">Cart</h2>
        <div className="mb-2">
          <p className="text-sm font-semibold">Total Products: {totalProducts}</p>
          <p className="text-sm font-semibold">Total Price: ${totalPrice}</p>
        </div>
        {orderpro.length === 0 ? (
          <p className="text-sm text-gray-600">Cart is empty</p>
        ) : (
          orderpro.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              <img src={item.images} alt={item.name} className="w-12 h-12 object-contain" />
              <div className="flex-1 ml-2">
                <p className="text-sm">{item.name}</p>
                <p className="text-sm text-red-700">{item.price}$</p>
              </div>
              <button
                className="bg-red-600 text-white rounded text-xs p-1 h-6 hover:bg-red-700"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Product;