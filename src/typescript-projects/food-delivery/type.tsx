interface MenuItem {
    available:number;
    price:number;
}

interface Order {
    id:number;
    items:string[];
    total:number;
}

interface RestaurantMenu {
    pizza?:MenuItem;
    pasta?:MenuItem;
    salad?:MenuItem;
    burger?:MenuItem;
    fries?:MenuItem;
    drink?:MenuItem;
}

interface Restaurant {
    menu:RestaurantMenu;
    orders:Order[];
    open:boolean;
}

interface FoodDeliveryService {
    serviceName:string;
    location:string;
    restaurants:{
        italianCorner:Restaurant;
        burgerJoint:Restaurant;
    };
    restaurantNames:string[];
    totalRestaurants:number;
}

export {
    MenuItem,
    Order,
    RestaurantMenu,
    Restaurant,
    FoodDeliveryService
};