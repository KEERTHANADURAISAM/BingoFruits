import React, { useState } from "react";

const Card = ({item}) => {
  const [fruits, setFruits] = useState([
    {
      id: "1",
      image: "https://t4.ftcdn.net/jpg/00/07/62/87/240_F_7628769_uuazcq6FMZk398hwIvay7lyNWMXua2pL.jpg",
      name:"Raspberries",
      price: 180,
    },
    {
      id: "2",
      image: "https://i.pinimg.com/474x/cd/9f/67/cd9f6700ab4f479258e02767741ad7e1.jpg",
      name: "Dragon fruit",
      price: 150,
    },
    {
        id: "3",
        image:"https://i.pinimg.com/474x/7a/aa/a5/7aaaa545e00e8a434850e80b8910dd94.jpg",
        name:"Orange",
        price:200,
    },
    {
        id: "4",
        image: "https://i.pinimg.com/474x/00/9c/6b/009c6be856b569b009527f4656b640bf.jpg",
        name: "Custard apple",
        price: 150,
      },
    
      {
        id: "5",
        image: "https://t3.ftcdn.net/jpg/03/08/46/30/240_F_308463020_gxuXYeeWicotzxo0FzMi86cnKJ4upmXM.jpg",
        name: "Blackberry",
        price: 150,
      },
        {
        id: "6",
        image: "https://t4.ftcdn.net/jpg/00/68/65/13/240_F_68651370_CVcQlAdJqvxtL8bIUm70UP1HwnFXOblQ.jpg",
        name: "Kiwi",
        price: 150,
      },
  ]);

  return (
    <section className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 my-10 p-10 ">
      {fruits.map((item) => {
     return (
          <div key={item.id} className="rounded-2xl overflow-hidden shadow-2xl transform group hover:scale-110 duration-100 relative">
            <img src={item.image} alt={item.name} className="w-full h-56 object-cover"/>
           <div className="flex flex-col items-center my-1  space-y-1">
            <span className="font-body text-slate-500 block hover:text-green-700">{item.name}</span>
            <span className="font-body text-slate-500 block">$ {item.price}</span>
            <span className="font-body block uppercase text-lime-400 text-xs group-hover:visible invisible">Add to Cart</span>
            </div>
            <span className="absolute top-3 right-3 bg-sky-300 text-white border-sky-300 p-1 rounded-lg text-sm">1% off</span>
          </div>
        );
      })}
    </section>
  );
};

export default Card;
