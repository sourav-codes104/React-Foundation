import React from 'react'
import Card from './components/Card'
function App() {
  const snacks = [
  {
    id: 1,
    name: "Whole Wheat Loaf",
    description: "Nutritious, fibre-rich and wholesome loaves.",
    price: 4.5,
    stock: 40,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600",
  },
  {
    id: 2,
    name: "White Bread",
    description: "Soft and fluffy everyday bread.",
    price: 3.99,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600",
  },
  {
    id: 3,
    name: "Multigrain Bread",
    description: "Loaded with healthy grains and seeds.",
    price: 5.25,
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600",
  },
  {
    id: 4,
    name: "Croissant",
    description: "Buttery and flaky French pastry.",
    price: 2.75,
    stock: 32,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600",
  },
  {
    id: 5,
    name: "Chocolate Muffin",
    description: "Rich chocolate muffin with soft texture.",
    price: 3.5,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600",
  },
  {
    id: 6,
    name: "Blueberry Muffin",
    description: "Fresh blueberries in every bite.",
    price: 3.75,
    stock: 14,
    image:
      "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=600",
  },
  {
    id: 7,
    name: "Donut",
    description: "Classic glazed sweet donut.",
    price: 1.99,
    stock: 45,
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600",
  },
  {
    id: 8,
    name: "Bagel",
    description: "Chewy and delicious breakfast bagel.",
    price: 2.49,
    stock: 22,
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600",
  },
  {
    id: 9,
    name: "Garlic Bread",
    description: "Fresh bread with garlic butter.",
    price: 4.99,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600",
  },
  {
    id: 10,
    name: "Baguette",
    description: "Traditional crispy French baguette.",
    price: 3.25,
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600",
  },
  {
    id: 11,
    name: "Cinnamon Roll",
    description: "Sweet roll topped with icing.",
    price: 4.0,
    stock: 16,
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600",
  },
  {
    id: 12,
    name: "Brownie",
    description: "Dense and fudgy chocolate brownie.",
    price: 3.2,
    stock: 28,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600",
  },
  {
    id: 13,
    name: "Cupcake",
    description: "Vanilla cupcake with frosting.",
    price: 2.8,
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600",
  },
  {
    id: 14,
    name: "Pretzel",
    description: "Soft baked salted pretzel.",
    price: 2.6,
    stock: 19,
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600",
  },
  {
    id: 15,
    name: "Cheese Bun",
    description: "Fresh bun filled with cheese.",
    price: 3.8,
    stock: 21,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600",
  },
  {
    id: 16,
    name: "Banana Bread",
    description: "Moist banana-flavoured bread.",
    price: 5.1,
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600",
  },
  {
    id: 17,
    name: "Apple Pie",
    description: "Classic pie with apple filling.",
    price: 6.5,
    stock: 8,
    image:
      "https://imgs.search.brave.com/UdZDxVzXhyhEF7R0U1M6mmh6ifJAcORDNP3Wv6p1XSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8w/NS8yMC8xMC8xMS9h/cHBsZS1waWUtNTE5/NTgwOF82NDAuanBn",
  },
  {
    id: 18,
    name: "Pancake Stack",
    description: "Fluffy pancakes with syrup.",
    price: 7.25,
    stock: 11,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600",
  },
  {
    id: 19,
    name: "Waffle",
    description: "Golden crispy waffle.",
    price: 6.0,
    stock: 17,
    image:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600",
  },
  {
    id: 20,
    name: "Chocolate Cake Slice",
    description: "Rich and creamy chocolate cake.",
    price: 5.75,
    stock: 13,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
  },
];
  return (
    <div className='parent'>
    {snacks.map((elem,idx)=>{
      return <div key={idx}><Card id={elem.id} name={elem.name} img ={elem.image} desc ={elem.description} price ={elem.price} stock={elem.stock} /></div>
    })}
    </div>
  )
}

export default App
