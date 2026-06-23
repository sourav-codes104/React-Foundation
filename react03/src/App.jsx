import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
const App = () => {
  const customerSegments = [
    {
      id: 1,
      title: "Satisfied",
      description:
        "Prime customers with access to bank credit and satisfied with current products.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop",
      buttonColor: "bg-blue-600",
      buttonTextColor: "text-white",
    },
    {
      id: 2,
      title: "Underserved",
      description:
        "Prime customers with access to credit but dissatisfied with current services.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&auto=format&fit=crop",
      buttonColor: "bg-blue-600",
      buttonTextColor: "text-white",
    },
    {
      id: 3,
      title: "Underbanked",
      description:
        "Near-prime and subprime customers with limited access to bank credit.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&q=80&auto=format&fit=crop",
      buttonColor: "bg-lime-400",
      buttonTextColor: "text-black",
    },
    {
      id: 4,
      title: "Young Professionals",
      description:
        "Early-career customers looking for savings and investment opportunities.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80&auto=format&fit=crop",
      buttonColor: "bg-indigo-600",
      buttonTextColor: "text-white",
    },
    {
      id: 5,
      title: "Students",
      description:
        "College students requiring affordable banking and digital payment solutions.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop",
      buttonColor: "bg-purple-600",
      buttonTextColor: "text-white",
    },
    {
      id: 6,
      title: "Freelancers",
      description:
        "Independent workers managing variable income and business transactions.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&auto=format&fit=crop",
      buttonColor: "bg-cyan-600",
      buttonTextColor: "text-white",
    },
    {
      id: 7,
      title: "Entrepreneurs",
      description:
        "Business owners seeking loans, payment gateways, and growth capital.",
      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80&auto=format&fit=crop",
      buttonColor: "bg-orange-500",
      buttonTextColor: "text-white",
    },
    {
      id: 8,
      title: "Retirees",
      description:
        "Senior citizens focused on security, pensions, and wealth preservation.",
      image:
        "https://images.unsplash.com/photo-1761638078977-d5490ddca251?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
      buttonColor: "bg-green-600",
      buttonTextColor: "text-white",
    },
    {
      id: 9,
      title: "High Net Worth",
      description:
        "Affluent clients interested in premium wealth management services.",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80&auto=format&fit=crop",
      buttonColor: "bg-yellow-500",
      buttonTextColor: "text-black",
    },
    {
      id: 10,
      title: "Digital Natives",
      description:
        "Tech-savvy customers preferring mobile-first banking experiences.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&auto=format&fit=crop",
      buttonColor: "bg-sky-500",
      buttonTextColor: "text-white",
    },
    {
      id: 11,
      title: "Rural Customers",
      description:
        "People in rural areas seeking accessible and affordable banking services.",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80&auto=format&fit=crop",
      buttonColor: "bg-emerald-600",
      buttonTextColor: "text-white",
    },
    {
      id: 12,
      title: "Small Businesses",
      description:
        "Local businesses requiring cash-flow management and financing.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop",
      buttonColor: "bg-red-600",
      buttonTextColor: "text-white",
    },
    {
      id: 13,
      title: "Corporate Clients",
      description:
        "Large organizations needing treasury and enterprise banking solutions.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80&auto=format&fit=crop",
      buttonColor: "bg-slate-700",
      buttonTextColor: "text-white",
    },
    {
      id: 14,
      title: "International Users",
      description:
        "Customers frequently sending or receiving money across borders.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80&auto=format&fit=crop",
      buttonColor: "bg-teal-600",
      buttonTextColor: "text-white",
    },
    {
      id: 15,
      title: "Credit Builders",
      description:
        "Individuals looking to establish or improve their credit profile.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop",
      buttonColor: "bg-pink-600",
      buttonTextColor: "text-white",
    },
  ];


  return (
    <div>
      <Section1 customerSegments={customerSegments} />
    </div>
  )
}

export default App
