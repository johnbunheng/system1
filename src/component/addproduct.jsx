import { useRef, useState, useEffect } from 'react';
import { BiSolidPurchaseTag } from 'react-icons/bi';
import Product from './product';

const Addproduct = () => {
  const [proname, setProname] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState(null); // Renamed from files to file
  const fileInputRef = useRef(null);

  // Initialize arrItem from localStorage
  const [arrItem, setArrItem] = useState(() => {
    const savedItems = localStorage.getItem('products');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // Save to localStorage whenever arrItem changes
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(arrItem));
  }, [arrItem]);

  const AddItem = () => {
    if (!proname || !price || !file) {
      alert('Please enter product name, price, and select an image');
      return;
    }

    // Create new item object
    const object_item = {
      proname,
      price,
      file: URL.createObjectURL(file),
    };
    const new_item = [...arrItem, object_item];
    setArrItem(new_item);

    // Reset form
    setProname('');
    setPrice('');
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }

    // Show success message
    alert('Product added successfully!');
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const removeItem = (index) => {
    if (window.confirm('Are you sure you want to remove this product?')) {
      // Revoke object URL to prevent memory leaks
      URL.revokeObjectURL(arrItem[index].file);
      // Filter out the item
      const updatedItems = arrItem.filter((_, i) => i !== index);
      setArrItem(updatedItems);
    }
  };

  return (
    <div className="container mt-5 ml-64 p-3 flex-1 w-4/5 bg-slate-100 rounded border border-gray-700">
      <div className="flex justify-between items-center">
        <input
          value={proname}
          className="p-2 h-8 border border-gray-400 rounded"
          placeholder="Product name"
          onChange={(e) => setProname(e.target.value)}
        />
        <input
          value={price}
          className="p-2 h-8 border border-gray-400 rounded"
          placeholder="Price"
          type="number" // Ensure numeric input
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="p-2"
          type="file"
          accept="image/*" // Restrict to images
          onChange={handleFileChange}
          ref={fileInputRef}
        />
        <button
          className="w-20 h-8 bg-green-600 text-white rounded-md m-2 hover:bg-green-700"
          onClick={AddItem}
        >
          Add
        </button>
        <div className="p-2">
          <BiSolidPurchaseTag className="inline-block text-2xl" title="Add Product" />
        </div>
      </div>
      <div>
        <div className="w-4/5 grid grid-cols-5 gap-4 border mt-5 mb-5 text-lg font-semibold border-none text-center">
          <h1>ID</h1>
          <h1>Name</h1>
          <h1>Price</h1>
          <h1>Photo</h1>
          <h1>Delete</h1>
        </div>
        {arrItem.map((item, index) => (
          <div
            key={index}
            className="w-4/5 grid grid-cols-5 gap-4 border border-gray-800 m-2 rounded-lg items-center text-center"
          >
            <h1 className="p-2">{index + 1}</h1>
            <h1 className="p-5">{item.proname}</h1>
            <p className="p-2">{item.price}</p>
            <div>
              <img src={item.file} alt={item.proname} className="w-20 p-2 h-20 object-contain" />
            </div>
            <div>
              <button
                className="w-20 h-8 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addproduct;