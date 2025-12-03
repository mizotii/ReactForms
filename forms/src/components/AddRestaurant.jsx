import { useState } from "react";
function AddRestaurant({ updateRestaurants }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    cuisine: "",
    rating: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData);
  }

  return (
    <form>
      <div>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} required />
      </div>

      <div>
        <label>image:</label>
        <input type="text" name="image" onChange={handleChange} required />
      </div>

      <div>
        <label>Address:</label>
        <input type="text" name="address" onChange={handleChange} required />
      </div>

      <div>
        <label>Phone:</label>
        <input type="tel" name="phone" onChange={handleChange} required />
      </div>

      <div>
        <label>Cuisine:</label>
        <input type="text" name="cuisine" onChange={handleChange} required />
      </div>

      <div>
        <label>Rating:</label>
        <input type="number" name="rating" min="1" max="5" onChange={handleChange} required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddRestaurant;
