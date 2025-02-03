import { FoodDeliveryService } from "../food-delivery/type";

const foodDeliveryService={
    serviceName:"TastyBites Delivery",
    location:"Foodville",
    restaurants:{
        italianCorner:{
        menu:{
            pizza:{available:20,price:12},
            pasta:{available:30,price:10},
            salad:{available:15,price:8},
        },

        orders:[
            {id:1,items:["pizza","pasta"],total:22},
            {id:2,items:["salad","pasta"],total:18},
            {id:3,items:["pizza","pasta"],total:12},
        ],
        open:false,
    },

    burgerJoint:{
        menu:{
            burger:{available:25,price:8},
            fries:{available:40,price:4},
            drink:{available:30,price:2},
        },

        orders:[
            {id:1,items:["burger","fries"],total:12},
            {id:2,items:["drink","burger","fries"],total:14},
            {id:3,items:["drink"],total:12},


        ],
        open:true,
    },
},

restaurantNames:["italianCorner","burgerJoint"],
totalRestaurants:2,
};

export default foodDeliveryService;

