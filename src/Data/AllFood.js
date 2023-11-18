import React from 'react'
import tuB from '../assets/veganer-bohnen-burger.jpg'
import clB from '../assets/ClassicBurgur.png'
import laB from '../assets/LambBurger.jpg'
import chB from '../assets/Chickenburger.jpg'
import peP from '../assets/Pepperonipizzahoriz.jpg (1)'
import veP from '../assets/VeggiePizza.jpg'
import meP from '../assets/MeatPizza.jpg'
import seaS from '../assets/SeafoodSandwich.jpg'
import grS from '../assets/GrilledSandwich.jpg'
import nuS from '../assets/NutellaSandwich.jpg'
import reS from '../assets/BD_Wholemeal-Block-Loaf_Ricotta-and-Raspberry-French-Toast-5532.jpg'
const AllFood = [
    { img: tuB, title: 'Turkey Burge', time: '20-25 min', price: '15.00$', type: 'Burgers', id: 1 },
    { img: clB, title: 'Classic Burger', time: '18-22 min', price: '14.00$', type: 'Burgers', id: 2 },
    { img: laB, title: 'Lamb Burger', time: '20-23 min', price: '16.00$', type: 'Burgers', id: 3 },
    { img: chB, title: 'Chicken Burger', time: '19-21 min', price: '15.00$', type: 'Burgers', id: 4 },

    { img: peP, title: 'Pepperoni Pizza.', time: '22-25 min', price: '20.00$', type: 'Pizza', id: 5 },
    { img: veP, title: 'Veggie Pizza.', time: '21-24 min', price: '19.00$', type: 'Pizza', id: 6 },
    { img: meP, title: 'Meat Pizza.', time: '22-25 min', price: '20.00$', type: 'Pizza', id: 7 },

    { img: seaS, title: 'Seafood Sandwich.', time: '15-18 min', price: '10.00$', type: 'Sandwiches', id: 8 },
    { img: grS, title: 'Grilled Sandwich. ', time: '17-19 min', price: '12.00$', type: 'Sandwiches', id: 9 },
    { img: nuS, title: 'Nutella Sandwich. ', time: '16-18 min', price: '11.00$', type: 'Sandwiches', id: 10 },
    { img: reS, title: 'Respberry Stuffed French Toasts', time: '20-25 min', price: '15.00$', type: 'Sandwiches', id: 11 },
]

export default AllFood
