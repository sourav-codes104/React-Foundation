import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const details = [
    {
      id: 1,
      img: "https://i.pravatar.cc/150?img=1",
      name: "Aarav Sharma",
      desc: "Frontend developer focused on React and modern UI design.",
    },
    {
      id: 2,
      img: "https://i.pravatar.cc/150?img=2",
      name: "Priya Verma",
      desc: "UI/UX designer creating clean and user-friendly digital experiences.",
    },
    {
      id: 3,
      img: "https://i.pravatar.cc/150?img=3",
      name: "Rohan Mehta",
      desc: "Backend developer working with Node.js, Express and databases.",
    },
    {
      id: 4,
      img: "https://i.pravatar.cc/150?img=4",
      name: "Ananya Gupta",
      desc: "Data analyst passionate about turning data into useful insights.",
    },
    {
      id: 5,
      img: "https://i.pravatar.cc/150?img=5",
      name: "Vikram Patel",
      desc: "Cloud engineer interested in AWS, DevOps and scalable systems.",
    },
    {
      id: 6,
      img: "https://i.pravatar.cc/150?img=6",
      name: "Sneha Joshi",
      desc: "Cybersecurity enthusiast learning ethical hacking and network security.",
    },
    {
      id: 7,
      img: "https://i.pravatar.cc/150?img=7",
      name: "Aditya Singh",
      desc: "Full-stack developer building applications with the MERN stack.",
    },
    {
      id: 8,
      img: "https://i.pravatar.cc/150?img=8",
      name: "Kavya Malhotra",
      desc: "Mobile developer creating Android applications with modern technologies.",
    },
    {
      id: 9,
      img: "https://i.pravatar.cc/150?img=9",
      name: "Arjun Kapoor",
      desc: "Software engineer passionate about algorithms and problem solving.",
    },
    {
      id: 10,
      img: "https://i.pravatar.cc/150?img=10",
      name: "Meera Nair",
      desc: "Machine learning enthusiast exploring AI and predictive models.",
    },
    {
      id: 11,
      img: "https://i.pravatar.cc/150?img=11",
      name: "Rahul Yadav",
      desc: "DevOps engineer working with Docker, CI/CD and cloud infrastructure.",
    },
    {
      id: 12,
      img: "https://i.pravatar.cc/150?img=12",
      name: "Ishita Rao",
      desc: "Product designer who loves building simple and intuitive interfaces.",
    },
    {
      id: 13,
      img: "https://i.pravatar.cc/150?img=13",
      name: "Karan Shah",
      desc: "JavaScript developer exploring React, Node.js and TypeScript.",
    },
    {
      id: 14,
      img: "https://i.pravatar.cc/150?img=14",
      name: "Nisha Agarwal",
      desc: "Database enthusiast working with MongoDB and PostgreSQL.",
    },
    {
      id: 15,
      img: "https://i.pravatar.cc/150?img=15",
      name: "Manish Tiwari",
      desc: "Blockchain developer interested in Web3 and decentralized applications.",
    },
    {
      id: 16,
      img: "https://i.pravatar.cc/150?img=16",
      name: "Simran Kaur",
      desc: "Content creator sharing knowledge about technology and programming.",
    },
    {
      id: 17,
      img: "https://i.pravatar.cc/150?img=17",
      name: "Yash Thakur",
      desc: "Python developer building automation tools and backend services.",
    },
    {
      id: 18,
      img: "https://i.pravatar.cc/150?img=18",
      name: "Pooja Mishra",
      desc: "Software tester focused on automation and application quality.",
    },
    {
      id: 19,
      img: "https://i.pravatar.cc/150?img=19",
      name: "Dev Rajput",
      desc: "Game developer experimenting with Unity and interactive experiences.",
    },
    {
      id: 20,
      img: "https://i.pravatar.cc/150?img=20",
      name: "Tanvi Soni",
      desc: "AI developer exploring large language models and intelligent applications.",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {details.map((item) => (
          <Card key={item.id} details={item} />
        ))}
      </div>
    </>
  );
}

export default App;
