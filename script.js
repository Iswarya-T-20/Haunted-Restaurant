/*=========================================================
 HUNTED RESTAURANT
 script.js
=========================================================*/

/*=========================================================
 FOOD DATA
=========================================================*/

const foods = [

{
    id:1,
    name:"Devil's Pizza",
    category:"Pizza",
    type:"Non Veg",
    price:18,
    rating:4.9,
    image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900",
    description:"Loaded chicken pizza with extra cheese."
},

{
    id:2,
    name:"Ghost Burger",
    category:"Burger",
    type:"Non Veg",
    price:14,
    rating:4.8,
    image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900",
    description:"Monster double grilled chicken burger."
},

{
    id:3,
    name:"Haunted Chicken Biryani",
    category:"Non Veg",
    type:"Non Veg",
    price:16,
    rating:4.9,
    image:"https://images.unsplash.com/photo-1701579231349-d7459c40919d?w=900",
    description:"Traditional spicy chicken biryani."
},

{
    id:4,
    name:"Zombie Fried Chicken",
    category:"Non Veg",
    type:"Non Veg",
    price:15,
    rating:4.8,
    image:"https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=900",
    description:"Extra crispy fried chicken."
},

{
    id:5,
    name:"Vampire Shawarma",
    category:"Non Veg",
    type:"Non Veg",
    price:13,
    rating:4.7,
    image:"https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=900",
    description:"Juicy chicken shawarma roll."
},

{
    id:6,
    name:"Inferno BBQ Wings",
    category:"Non Veg",
    type:"Non Veg",
    price:12,
    rating:4.7,
    image:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=900",
    description:"Smoky barbecue chicken wings."
},

{
    id:7,
    name:"Dragon Chicken",
    category:"Non Veg",
    type:"Non Veg",
    price:14,
    rating:4.8,
    image:"https://images.unsplash.com/photo-1600891964092-4316c288032e?w=900",
    description:"Spicy dragon chicken."
},

{
    id:8,
    name:"Monster Pasta",
    category:"Veg",
    type:"Veg",
    price:11,
    rating:4.6,
    image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=900",
    description:"Creamy white sauce pasta."
},

{
    id:9,
    name:"Dark Paneer Tikka",
    category:"Veg",
    type:"Veg",
    price:12,
    rating:4.8,
    image:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=900",
    description:"Grilled paneer cubes."
},

{
    id:10,
    name:"Cursed Veg Pizza",
    category:"Pizza",
    type:"Veg",
    price:15,
    rating:4.7,
    image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900",
    description:"Cheesy vegetable pizza."
},

{
    id:11,
    name:"Mystic Veg Burger",
    category:"Burger",
    type:"Veg",
    price:10,
    rating:4.5,
    image:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=900",
    description:"Veg burger with cheese."
},

{
    id:12,
    name:"Bloody Brownie",
    category:"Dessert",
    type:"Veg",
    price:8,
    rating:4.8,
    image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900",
    description:"Chocolate brownie."
},

{
    id:13,
    name:"Ghost Ice Cream",
    category:"Dessert",
    type:"Veg",
    price:7,
    rating:4.7,
    image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900",
    description:"Vanilla ice cream."
},

{
    id:14,
    name:"Haunted Coffee",
    category:"Drinks",
    type:"Veg",
    price:6,
    rating:4.6,
    image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900",
    description:"Fresh hot coffee."
},

{
    id:15,
    name:"Blood Orange Juice",
    category:"Drinks",
    type:"Veg",
    price:7,
    rating:4.5,
    image:"https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=900",
    description:"Fresh orange juice."
},

{
    id:16,
    name:"Cursed Paneer Butter Masala",
    category:"Veg",
    type:"Veg",
    price:15,
    rating:4.9,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=900",
    description:"Creamy paneer cooked in rich buttery tomato gravy."
},

{
    id:17,
    name:"Witch Mushroom Soup",
    category:"Veg",
    type:"Veg",
    price:8,
    rating:4.7,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1547592166-23ac45744acd?w=900",
    description:"Hot creamy mushroom soup with herbs."
},

{
    id:18,
    name:"Haunted Veg Fried Rice",
    category:"Veg",
    type:"Veg",
    price:12,
    rating:4.8,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900",
    description:"Stir-fried rice loaded with vegetables."
},

{
    id:19,
    name:"Phantom Noodles",
    category:"Chinese",
    type:"Veg",
    price:13,
    rating:4.8,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=900",
    description:"Spicy noodles tossed with fresh vegetables."
},

{
    id:20,
    name:"Zombie Gobi Manchurian",
    category:"Chinese",
    type:"Veg",
    price:11,
    rating:4.7,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=900",
    description:"Crispy cauliflower in spicy Manchurian sauce."
},

{
    id:21,
    name:"Dark Masala Dosa",
    category:"South Indian",
    type:"Veg",
    price:10,
    rating:4.9,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900",
    description:"Golden crispy dosa served with chutney and sambar."
},

{
    id:22,
    name:"Ghost Idli Combo",
    category:"South Indian",
    type:"Veg",
    price:9,
    rating:4.7,
    tag:"Combo",
    image:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=900",
    description:"Soft idlis served with coconut chutney and sambar."
},

{
    id:23,
    name:"Haunted Pongal",
    category:"South Indian",
    type:"Veg",
    price:10,
    rating:4.6,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=900",
    description:"Traditional ghee pongal with pepper and cashews."
},

{
    id:24,
    name:"Vampire Chole Bhature",
    category:"North Indian",
    type:"Veg",
    price:14,
    rating:4.8,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1626132647523-66c6a7f2b95d?w=900",
    description:"Spicy chickpeas served with fluffy bhature."
},

{
    id:25,
    name:"Inferno Butter Naan",
    category:"North Indian",
    type:"Veg",
    price:6,
    rating:4.8,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=900",
    description:"Soft butter naan baked in a tandoor."
},
/*=========================================================
FOODS 26 - 35
Append inside foods[]
=========================================================*/

{
    id:26,
    name:"Chicken 65",
    category:"Non Veg",
    type:"Non Veg",
    price:14,
    rating:4.9,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=900",
    description:"South Indian style crispy spicy Chicken 65."
},

{
    id:27,
    name:"Tandoori Chicken",
    category:"Non Veg",
    type:"Non Veg",
    price:18,
    rating:5.0,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=900",
    description:"Char-grilled tandoori chicken marinated with Indian spices."
},

{
    id:28,
    name:"Butter Chicken",
    category:"North Indian",
    type:"Non Veg",
    price:19,
    rating:4.9,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900",
    description:"Creamy butter chicken served with rich tomato gravy."
},

{
    id:29,
    name:"Crispy Fish Fry",
    category:"Seafood",
    type:"Non Veg",
    price:17,
    rating:4.8,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1544025162-d76694265947?w=900",
    description:"Golden fried fish with herbs and lemon."
},

{
    id:30,
    name:"Spicy Prawn Fry",
    category:"Seafood",
    type:"Non Veg",
    price:20,
    rating:4.9,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1565680018434-b513d6c3c67f?w=900",
    description:"Juicy prawns tossed in spicy masala."
},

{
    id:31,
    name:"Egg Fried Rice",
    category:"Chinese",
    type:"Non Veg",
    price:13,
    rating:4.7,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900",
    description:"Classic fried rice loaded with fluffy scrambled eggs."
},

{
    id:32,
    name:"Chicken Momos",
    category:"Chinese",
    type:"Non Veg",
    price:12,
    rating:4.8,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1626776876729-bab4369a5a5f?w=900",
    description:"Steamed chicken dumplings served with spicy chutney."
},

{
    id:33,
    name:"Shawarma Plate",
    category:"Non Veg",
    type:"Non Veg",
    price:16,
    rating:4.8,
    tag:"Combo",
    image:"https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=900",
    description:"Chicken shawarma served with fries, garlic sauce and pita."
},

{
    id:34,
    name:"Chicken Tikka",
    category:"Non Veg",
    type:"Non Veg",
    price:17,
    rating:4.9,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900",
    description:"Tender chicken tikka grilled over charcoal."
},

{
    id:35,
    name:"Royal Mutton Curry",
    category:"North Indian",
    type:"Non Veg",
    price:21,
    rating:5.0,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900",
    description:"Slow-cooked mutton curry with aromatic spices."
},

/*=========================================================
FOODS 36 - 45
Append inside foods[]
=========================================================*/

{
    id:36,
    name:"Pepper Chicken",
    category:"Non Veg",
    type:"Non Veg",
    price:18,
    rating:4.9,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1608039755401-742074f0548d?w=900",
    description:"Tender chicken tossed with freshly crushed black pepper."
},

{
    id:37,
    name:"Dragon Chicken",
    category:"Chinese",
    type:"Non Veg",
    price:19,
    rating:4.9,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=900",
    description:"Fiery Indo-Chinese chicken with spicy dragon sauce."
},

{
    id:38,
    name:"Chicken Lollipop",
    category:"Chinese",
    type:"Non Veg",
    price:17,
    rating:4.8,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=900",
    description:"Crispy chicken lollipops served with spicy dip."
},

{
    id:39,
    name:"BBQ Chicken Wings",
    category:"Non Veg",
    type:"Non Veg",
    price:18,
    rating:4.9,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=900",
    description:"Smoky barbecue wings glazed with homemade BBQ sauce."
},

{
    id:40,
    name:"Grilled Chicken Steak",
    category:"Non Veg",
    type:"Non Veg",
    price:24,
    rating:5.0,
    tag:"Premium",
    image:"https://images.unsplash.com/photo-1544025162-d76694265947?w=900",
    description:"Juicy grilled chicken steak served with vegetables."
},

{
    id:41,
    name:"Seafood Platter",
    category:"Seafood",
    type:"Non Veg",
    price:28,
    rating:5.0,
    tag:"Combo",
    image:"https://images.unsplash.com/photo-1559847844-5315695dadae?w=900",
    description:"A delicious platter of fish, prawns, squid and crab."
},

{
    id:42,
    name:"Fish Curry",
    category:"Seafood",
    type:"Non Veg",
    price:19,
    rating:4.8,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=900",
    description:"Traditional spicy fish curry cooked with fresh spices."
},

{
    id:43,
    name:"Crab Masala",
    category:"Seafood",
    type:"Non Veg",
    price:25,
    rating:4.9,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=900",
    description:"Fresh crab cooked in rich South Indian masala."
},

{
    id:44,
    name:"Garlic Butter Prawns",
    category:"Seafood",
    type:"Non Veg",
    price:23,
    rating:4.9,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1565680018434-b513d6c3c67f?w=900",
    description:"Succulent prawns tossed in garlic butter sauce."
},

{
    id:45,
    name:"Chicken Kebab",
    category:"Non Veg",
    type:"Non Veg",
    price:18,
    rating:4.8,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1529042410759-befb1204b468?w=900",
    description:"Charcoal grilled chicken kebabs with mint chutney."
},

/*=========================================================
FOODS 46 - 55
Append inside foods[]
=========================================================*/

{
    id:46,
    name:"Royal Mutton Biryani",
    category:"Biryani",
    type:"Non Veg",
    price:24,
    rating:5.0,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1701579231349-d7459c40919d?w=900",
    description:"Authentic dum-cooked mutton biryani with aromatic spices."
},

{
    id:47,
    name:"Coastal Fish Biryani",
    category:"Biryani",
    type:"Non Veg",
    price:22,
    rating:4.9,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=900",
    description:"Fresh fish layered with fragrant basmati rice."
},

{
    id:48,
    name:"Spicy Prawn Biryani",
    category:"Biryani",
    type:"Non Veg",
    price:23,
    rating:4.9,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1563379091339-03246963d29a?w=900",
    description:"Juicy prawns cooked with premium basmati rice."
},

{
    id:49,
    name:"Homestyle Egg Curry",
    category:"North Indian",
    type:"Non Veg",
    price:13,
    rating:4.7,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900",
    description:"Boiled eggs simmered in rich tomato-onion gravy."
},

{
    id:50,
    name:"Chicken Fried Rice",
    category:"Chinese",
    type:"Non Veg",
    price:15,
    rating:4.8,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900",
    description:"Classic wok-tossed fried rice with tender chicken."
},

{
    id:51,
    name:"Schezwan Chicken Noodles",
    category:"Chinese",
    type:"Non Veg",
    price:16,
    rating:4.9,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=900",
    description:"Fiery Schezwan noodles packed with chicken."
},

{
    id:52,
    name:"Creamy Chicken Pasta",
    category:"Pasta",
    type:"Non Veg",
    price:17,
    rating:4.8,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=900",
    description:"Creamy white sauce pasta with grilled chicken."
},

{
    id:53,
    name:"Alfredo Pasta",
    category:"Pasta",
    type:"Veg",
    price:14,
    rating:4.8,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=900",
    description:"Classic Alfredo pasta with parmesan cheese."
},

{
    id:54,
    name:"Italian Lasagna",
    category:"Pasta",
    type:"Veg",
    price:18,
    rating:4.9,
    tag:"Premium",
    image:"https://images.unsplash.com/photo-1619895092538-128341789043?w=900",
    description:"Layered lasagna with creamy béchamel and cheese."
},

{
    id:55,
    name:"Grilled Chicken Wrap",
    category:"Wrap",
    type:"Non Veg",
    price:14,
    rating:4.8,
    tag:"Combo",
    image:"https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=900",
    description:"Soft tortilla stuffed with grilled chicken and veggies."
},

/*=========================================================
FOODS 56 - 68
Append inside foods[]
=========================================================*/

{
    id:56,
    name:"Royal Veg Biryani",
    category:"Biryani",
    type:"Veg",
    price:15,
    rating:4.8,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900",
    description:"Fragrant basmati rice cooked with fresh vegetables and aromatic spices."
},

{
    id:57,
    name:"Paneer Biryani",
    category:"Biryani",
    type:"Veg",
    price:17,
    rating:4.9,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=900",
    description:"Spiced paneer cubes layered with flavorful biryani rice."
},

{
    id:58,
    name:"Mushroom Biryani",
    category:"Biryani",
    type:"Veg",
    price:16,
    rating:4.8,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900",
    description:"Delicious mushroom biryani cooked with herbs and spices."
},

{
    id:59,
    name:"Lemon Rice",
    category:"South Indian",
    type:"Veg",
    price:9,
    rating:4.6,
    tag:"Traditional",
    image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900",
    description:"Tangy South Indian lemon rice tempered with peanuts."
},

{
    id:60,
    name:"Curd Rice",
    category:"South Indian",
    type:"Veg",
    price:8,
    rating:4.6,
    tag:"Traditional",
    image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900",
    description:"Creamy curd rice served with traditional seasoning."
},

{
    id:61,
    name:"Jeera Rice",
    category:"North Indian",
    type:"Veg",
    price:10,
    rating:4.7,
    tag:"Classic",
    image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900",
    description:"Long grain basmati rice flavored with roasted cumin."
},

{
    id:62,
    name:"Paneer Fried Rice",
    category:"Chinese",
    type:"Veg",
    price:13,
    rating:4.8,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900",
    description:"Indo-Chinese fried rice loaded with paneer cubes."
},

{
    id:63,
    name:"Veg Hakka Noodles",
    category:"Chinese",
    type:"Veg",
    price:12,
    rating:4.8,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=900",
    description:"Classic Hakka noodles tossed with crunchy vegetables."
},

{
    id:64,
    name:"Ultimate Cheese Pizza",
    category:"Pizza",
    type:"Veg",
    price:18,
    rating:4.9,
    tag:"Premium",
    image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900",
    description:"Loaded with mozzarella, cheddar and parmesan cheese."
},

{
    id:65,
    name:"Margherita Pizza",
    category:"Pizza",
    type:"Veg",
    price:16,
    rating:4.8,
    tag:"Classic",
    image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900",
    description:"Italian classic topped with mozzarella and basil."
},

{
    id:66,
    name:"Farmhouse Pizza",
    category:"Pizza",
    type:"Veg",
    price:19,
    rating:4.9,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900",
    description:"Loaded with mushrooms, onions, capsicum and olives."
},

{
    id:67,
    name:"Mexican Fiesta Pizza",
    category:"Pizza",
    type:"Veg",
    price:20,
    rating:4.9,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900",
    description:"Spicy Mexican pizza topped with jalapeños and corn."
},

{
    id:68,
    name:"Cheese Garlic Bread",
    category:"Starter",
    type:"Veg",
    price:9,
    rating:4.8,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=900",
    description:"Freshly baked garlic bread loaded with melted cheese."
},

/*=========================================================
FOODS 69 - 76
Append inside foods[]
=========================================================*/

{
    id:69,
    name:"Crispy French Fries",
    category:"Starter",
    type:"Veg",
    price:7,
    rating:4.7,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1576107232684-1279f390859f?w=900",
    description:"Golden crispy French fries served with tomato ketchup."
},

{
    id:70,
    name:"Peri Peri Fries",
    category:"Starter",
    type:"Veg",
    price:8,
    rating:4.8,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900",
    description:"Crispy fries tossed in spicy peri peri seasoning."
},

{
    id:71,
    name:"Onion Rings",
    category:"Starter",
    type:"Veg",
    price:9,
    rating:4.7,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1639024471283-03518883512d?w=900",
    description:"Crunchy battered onion rings served with spicy dip."
},

{
    id:72,
    name:"Mozzarella Sticks",
    category:"Starter",
    type:"Veg",
    price:11,
    rating:4.9,
    tag:"Premium",
    image:"https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=900",
    description:"Golden fried mozzarella sticks with marinara sauce."
},

{
    id:73,
    name:"Chocolate Lava Cake",
    category:"Dessert",
    type:"Veg",
    price:10,
    rating:5.0,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900",
    description:"Warm chocolate cake with a rich molten chocolate center."
},

{
    id:74,
    name:"Red Velvet Cake",
    category:"Dessert",
    type:"Veg",
    price:9,
    rating:4.9,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900",
    description:"Soft red velvet sponge layered with cream cheese frosting."
},

{
    id:75,
    name:"Brownie Sundae",
    category:"Dessert",
    type:"Veg",
    price:11,
    rating:5.0,
    tag:"Premium",
    image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900",
    description:"Warm brownie served with vanilla ice cream and chocolate syrup."
},

{
    id:76,
    name:"Vanilla Milkshake",
    category:"Drinks",
    type:"Veg",
    price:7,
    rating:4.8,
    tag:"Classic",
    image:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=900",
    description:"Creamy vanilla milkshake topped with whipped cream."
},

/*=========================================================
FOODS 77 - 83
Append inside foods[]
=========================================================*/

{
    id:77,
    name:"Chocolate Milkshake",
    category:"Drinks",
    type:"Veg",
    price:8,
    rating:4.9,
    tag:"Popular",
    image:"https://images.unsplash.com/photo-1577805947697-89e18249d767?w=900",
    description:"Rich chocolate milkshake topped with whipped cream and chocolate syrup."
},

{
    id:78,
    name:"Oreo Milkshake",
    category:"Drinks",
    type:"Veg",
    price:9,
    rating:5.0,
    tag:"Chef's Choice",
    image:"https://images.unsplash.com/photo-1553787499-6f913324e0c0?w=900",
    description:"Creamy Oreo milkshake blended with cookies and vanilla ice cream."
},

{
    id:79,
    name:"Virgin Mojito",
    category:"Drinks",
    type:"Veg",
    price:7,
    rating:4.8,
    tag:"Refreshing",
    image:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=900",
    description:"Fresh mint, lime, soda and crushed ice."
},

{
    id:80,
    name:"Fresh Lime Soda",
    category:"Drinks",
    type:"Veg",
    price:6,
    rating:4.7,
    tag:"Classic",
    image:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=900",
    description:"Refreshing lime soda served chilled."
},

{
    id:81,
    name:"👻 Monster Combo Meal",
    category:"Combo",
    type:"Non Veg",
    price:34,
    rating:5.0,
    tag:"Best Seller",
    image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900",
    description:"Chicken burger, fries, fried chicken, pizza slice, brownie and drink."
},

{
    id:82,
    name:"👨‍👩‍👧‍👦 Family Feast Combo",
    category:"Combo",
    type:"Mixed",
    price:59,
    rating:5.0,
    tag:"Family Pack",
    image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900",
    description:"Large pizza, biryani, fried rice, starters, desserts and four drinks."
},

{
    id:83,
    name:"💀 Haunted Mega Combo",
    category:"Combo",
    type:"Mixed",
    price:89,
    rating:5.0,
    tag:"Ultimate Feast",
    image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900",
    description:"The biggest haunted feast with pizza, burgers, biryani, seafood, desserts and unlimited soft drinks."
},

];

/*=========================================================
 DOM ELEMENTS
=========================================================*/

const foodContainer = document.getElementById("foodContainer");
const searchInput = document.getElementById("searchInput");
const categories = document.querySelectorAll(".category");

const cartSidebar = document.getElementById("cartSidebar");
const cartBtn = document.getElementById("cartBtn");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalPrice = document.getElementById("totalPrice");

/*=========================================================
 APP STATE
=========================================================*/

let cart = [];
let favorites = [];
let currentCategory = "All";

/*=========================================================
 STAR RATING
=========================================================*/

function stars(value){

    let html="";

    const full=Math.floor(value);

    for(let i=0;i<full;i++){

        html+="⭐";

    }

    return html;

}

/*=========================================================
 FOOD CARD TEMPLATE
=========================================================*/

function foodCard(food){

return `

<span class="badge-food ${food.type==="Veg" ? "veg" : "nonveg"}">
    ${food.type}
</span>
${food.tag ? `
<span class="food-tag ${food.tag === "Premium" ? "premium" : ""}">
    ${food.tag}
</span>
` : ""}
<h3>${food.name}</h3>

<div class="rating">

    ${stars(food.rating)}

    <span>${food.rating}</span>

</div>

<p>

${food.description}

</p>

<div class="price">

    $${food.price.toFixed(2)}

</div>

<div class="food-buttons">

<button
class="add-cart"
onclick="addToCart(${food.id})">

<i class="fa-solid fa-cart-shopping"></i>

Add-cart

</button>

<button
class="favorite"
onclick="toggleFavorite(${food.id},this)">

<i class="fa-solid fa-heart"></i>

</button>

<button
class="btn btn-outline-danger w-100"
onclick="quickView(${food.id})">

👁 Quick View

</button>


</div>

</div>

</div>

</div>

`;

}


/*=========================================================
 RENDER MENU
=========================================================*/

function renderFoods(list){

foodContainer.innerHTML="";

list.forEach(food=>{

foodContainer.innerHTML+=foodCard(food);

});

}

renderFoods(foods);

console.log("Hunted Restaurant Loaded");

/*=========================================================
 LIVE SEARCH
=========================================================*/

// searchInput.addEventListener("input", function () {

//     const keyword = this.value.toLowerCase().trim();

//     const filtered = foods.filter(food => {

//         return (
//             food.name.toLowerCase().includes(keyword) ||
//             food.category.toLowerCase().includes(keyword) ||
//             food.type.toLowerCase().includes(keyword)
//         );

//     });

//     renderFoods(filtered);

// });

// /*=========================================================
//  CATEGORY FILTER
// =========================================================*/

// categories.forEach(button => {

//     button.addEventListener("click", function () {

//         categories.forEach(btn => btn.classList.remove("active"));

//         this.classList.add("active");

//         currentCategory = this.dataset.category;

//         if (currentCategory === "All") {

//             renderFoods(foods);

//             return;

//         }

//         const filtered = foods.filter(food => {

//             return food.category === currentCategory ||
//                    food.type === currentCategory;

//         });

//         renderFoods(filtered);

//     });

// });

let currentSearch = "";

function applyFilters(){

    let filtered = [...foods];

    if(currentCategory !== "All"){

        filtered = filtered.filter(food =>

            food.category === currentCategory ||

            food.type === currentCategory

        );

    }

    if(currentSearch !== ""){

        filtered = filtered.filter(food =>

            food.name.toLowerCase().includes(currentSearch) ||

            food.description.toLowerCase().includes(currentSearch) ||

            food.category.toLowerCase().includes(currentSearch)

        );

    }

    renderFoods(filtered);

}

searchInput.addEventListener("input",e=>{

    currentSearch = e.target.value.toLowerCase();

    applyFilters();

});

categories.forEach(btn=>{

    btn.addEventListener("click",()=>{

        currentCategory = btn.dataset.category;

        applyFilters();

    });

});

/*=========================================================
 FAVORITES
=========================================================*/

function toggleFavorite(id, button) {

    const index = favorites.indexOf(id);

    if (index === -1) {

        favorites.push(id);

        button.style.background = "crimson";

        button.innerHTML = '<i class="fa-solid fa-heart"></i>';

        toast("❤️ Added to Favorites");

    } else {

        favorites.splice(index, 1);

        button.style.background = "#333";

        toast("💔 Removed from Favorites");

    }

}

function renderFavorites(){

    const box=document.getElementById("favoriteItems");

    if(!box) return;

    box.innerHTML="";

    const favFoods=foods.filter(food=>

        favorites.includes(food.id)

    );

    if(favFoods.length===0){

        box.innerHTML="<h4>No favourites yet.</h4>";

        return;

    }

    favFoods.forEach(food=>{

        box.innerHTML+=`

        <div class="favorite-card">

            <img src="${food.image}">

            <h4>${food.name}</h4>

            <button

            onclick="addToCart(${food.id})"

            class="btn btn-danger">

            Add to Cart

            </button>

        </div>

        `;

    });

}

// const favSidebar=document.getElementById("favoriteSidebar");

// document.getElementById("favoriteBtn")

// .addEventListener("click",()=>{

// favSidebar.classList.add("active");

// renderFavorites();

// });

// document.getElementById("closeFavorite")

// .addEventListener("click",()=>{

// favSidebar.classList.remove("active");

// });
//new change
const favSidebar = document.getElementById("favoriteSidebar");
const favoriteBtn = document.getElementById("favoriteBtn");
const closeFavorite = document.getElementById("closeFavorite");

if (favoriteBtn && favSidebar) {
    favoriteBtn.addEventListener("click", () => {
        favSidebar.classList.add("active");
        renderFavorites();
    });
}

if (closeFavorite && favSidebar) {
    closeFavorite.addEventListener("click", () => {
        favSidebar.classList.remove("active");
    });
}


/*=========================================================
 ADD TO CART
=========================================================*/

function addToCart(id) {

    const food = foods.find(item => item.id === id);

    if (!food) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {

        existing.qty++;

    } else {

        cart.push({

            ...food,

            qty:1

        });

    }

    updateCart();
    toast("🛒 Item Added");

}

/*=========================================================
 REMOVE ITEM
=========================================================*/

function removeCart(id){

    cart = cart.filter(item => item.id !== id);

    updateCart();

    saveData();

}

/*=========================================================
 CHANGE QUANTITY
=========================================================*/

function increaseQty(id){

    const item = cart.find(food => food.id === id);

    if(item){

        item.qty++;

        updateCart();

        saveData();

    }

}

function decreaseQty(id){

    const item = cart.find(food => food.id === id);

    if(!item) return;

    item.qty--;

    if(item.qty <= 0){

        removeCart(id);

        return;

    }

    updateCart();

    saveData();

}

/*=========================================================
 UPDATE CART
=========================================================*/

function updateCart() {

    cartItems.innerHTML = "";

    // Empty Cart
    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <img src="assets/images/empty-cart.png" alt="Empty Cart">

                <h3> Your Cart is Empty</h3>

                <p>Add some hauntingly delicious food!</p>

            </div>

        `;

        cartCount.innerText = "0";

        totalPrice.innerText = "$0.00";

        saveData();

        return;

    }

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.qty;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div style="flex:1">

                <h5>${item.name}</h5>

                <p>$${item.price}</p>

                <div style="display:flex;gap:8px;align-items:center;">

                    <button
                        class="btn btn-sm btn-danger"
                        onclick="decreaseQty(${item.id})">
                        −
                    </button>

                    <strong>${item.qty}</strong>

                    <button
                        class="btn btn-sm btn-success"
                        onclick="increaseQty(${item.id})">
                        +
                    </button>

                </div>

            </div>

            <button
                class="btn btn-sm btn-outline-danger"
                onclick="removeCart(${item.id})">

                <i class="fa-solid fa-trash"></i>

            </button>

        </div>

        `;

    });

    cartCount.innerText = cart.reduce((sum, item) => {

        return sum + item.qty;

    }, 0);

    totalPrice.innerText = "$" + total.toFixed(2);

    saveData();

}

/*=========================================================
 OPEN / CLOSE CART
=========================================================*/

if(cartBtn && cartSidebar){

    cartBtn.addEventListener("click",()=>{

        cartSidebar.classList.add("active");

    });

}

if(closeCart && cartSidebar){

    closeCart.addEventListener("click",()=>{

        cartSidebar.classList.remove("active");

    });

}

/*=========================================================
 CLEAR CART
=========================================================*/

function clearCart(){

    cart = [];

    updateCart();

    saveData();

    toast("🧹 Cart Cleared");

}

/*=========================================================
 EMPTY CART MESSAGE
=========================================================*/

function checkEmptyCart(){

    if(cart.length===0){

        cartItems.innerHTML=`

        <div style="text-align:center;padding:50px 0;">

            <i class="fa-solid fa-cart-shopping"
            style="font-size:60px;color:#666;"></i>

            <h4 style="margin-top:20px;">

                Cart is Empty

            </h4>

            <p>

                Add some haunted food...

            </p>

        </div>

        `;

    }

}

updateCart();

checkEmptyCart();


function checkout(){

    if(cart.length===0){

        toast("🛒 Cart is empty");

        return;

    }

    const amount=cart.reduce(

        (sum,item)=>sum+item.price*item.qty,

        0

    );

    alert(

`Order Successful!

Items : ${cart.length}

Total : $${amount.toFixed(2)}

Thank you for visiting
Hunted Restaurant 👻`

    );

    cart=[];

    updateCart();

    saveData();
    celebrateOrder();
    
}

/*=========================================================
 SIMPLE TOAST
=========================================================*/

function toast(message){

    const toast=document.createElement("div");

    toast.className="toast-msg";

    toast.innerHTML=message;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },300);

    },2200);

}

/*=========================================================
PART 3C-1
Loading Screen
Typed.js
AOS
GSAP
Navbar Scroll
Smooth Scroll
Mouse Glow
=========================================================*/

/*=========================================================
LOADING SCREEN
=========================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    const progress = document.querySelector(".loading-progress");

    gsap.to(progress, {
        width: "100%",
        duration: 2,
        ease: "power2.out"
    });

    setTimeout(() => {

        gsap.to(loader, {
            opacity: 0,
            duration: 1,
            onComplete() {

                loader.style.display = "none";

            }

        });

    }, 2200);

});


/*=========================================================
TYPED HERO TITLE
=========================================================*/

new Typed("#typing", {

    strings: [

        "THE HUNTED RESTAURANT",

        "ENTER IF YOU DARE",

        "TASTE THE CURSED FEAST",

        "FOOD FROM THE DARK SIDE"

    ],

    typeSpeed: 70,

    backSpeed: 35,

    backDelay: 1800,

    loop: true

});


/*=========================================================
AOS
=========================================================*/

AOS.init({

    duration: 1000,

    once: false,

    easing: "ease-in-out"

});


/*=========================================================
GSAP HERO ANIMATION
=========================================================*/

gsap.from(".hero h4", {

    y: -80,

    opacity: 0,

    duration: 1

});

gsap.from(".hero h1", {

    y: 80,

    opacity: 0,

    duration: 1.4,

    delay: .4

});

gsap.from(".hero p", {

    opacity: 0,

    duration: 1.3,

    delay: .8

});

gsap.from(".hero-btn", {

    scale: 0,

    duration: .8,

    delay: 1.2,

    ease: "back"

});


/*=========================================================
FOOD CARD STAGGER
=========================================================*/

window.addEventListener("load", () => {

    gsap.from(".food-card", {

        opacity: 0,

        y: 80,

        duration: .7,

        stagger: .12,

        delay: 1.6

    });

});


/*=========================================================
NAVBAR SCROLL EFFECT
=========================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(0,0,0,.92)";

        navbar.style.padding = "8px 0";

        navbar.style.boxShadow = "0 10px 25px rgba(255,0,0,.25)";

    } else {

        navbar.style.background = "rgba(0,0,0,.65)";

        navbar.style.padding = "15px 0";

        navbar.style.boxShadow = "none";

    }

});


/*=========================================================
SMOOTH SCROLL
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});


/*=========================================================
MOUSE GLOW EFFECT
=========================================================*/

const glow = document.createElement("div");

glow.id = "mouseGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e)=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});


/*=========================================================
BUTTON HOVER SOUND EFFECT (VISUAL)
=========================================================*/

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        gsap.to(btn,{

            scale:1.08,

            duration:.2

        });

    });

    btn.addEventListener("mouseleave",()=>{

        gsap.to(btn,{

            scale:1,

            duration:.2

        });

    });

});


/*=========================================================
SECTION FADE IN
=========================================================*/

gsap.utils.toArray("section").forEach(section=>{

    gsap.from(section,{

        scrollTrigger:{

            trigger:section,

            start:"top 80%"

        },

        opacity:0,

        y:80,

        duration:1

    });

});


/*=========================================================
TITLE GLOW EFFECT
=========================================================*/

setInterval(()=>{

    document.querySelectorAll(".section-title").forEach(title=>{

        title.classList.toggle("glow");

    });

},1800);

console.log("Part 3C-1 Loaded Successfully");

/*=========================================================
PART 3C-2
Ghost Animation
Bat Animation
Fog Particles
Ambient Sound
Spark Particles
Performance
Final Initialization
=========================================================*/


/*=========================================================
RANDOM GHOST MOVEMENT
=========================================================*/

const ghosts = document.querySelectorAll(".ghost");

function randomGhostMovement(){

    ghosts.forEach((ghost,index)=>{

        gsap.to(ghost,{

            x:gsap.utils.random(-120,120),

            y:gsap.utils.random(-80,80),

            rotation:gsap.utils.random(-20,20),

            opacity:gsap.utils.random(.15,.4),

            duration:gsap.utils.random(4,8),

            ease:"sine.inOut",

            repeat:-1,

            yoyo:true,

            delay:index

        });

    });

}

randomGhostMovement();



/*=========================================================
RANDOM BAT MOVEMENT
=========================================================*/

const bats=document.querySelectorAll(".bat");

function animateBat(bat){

    const startY=Math.random()*300+50;

    gsap.set(bat,{
        x:-150,
        y:startY
    });

    gsap.to(bat,{

        x:window.innerWidth+250,

        y:startY+gsap.utils.random(-120,120),

        rotation:gsap.utils.random(-30,30),

        duration:gsap.utils.random(10,18),

        ease:"none",

        onComplete(){

            animateBat(bat);

        }

    });

}

bats.forEach(animateBat);



/*=========================================================
FOG PARTICLES
=========================================================*/

const fogLayer=document.createElement("div");

fogLayer.id="fogLayer";

document.body.appendChild(fogLayer);

function createFog(){

    const fog=document.createElement("div");

    fog.className="fog-particle";

    fog.style.left=Math.random()*100+"vw";

    fog.style.top=Math.random()*100+"vh";

    fog.style.width=80+Math.random()*180+"px";

    fog.style.height=fog.style.width;

    fog.style.opacity=Math.random()*.3;

    fogLayer.appendChild(fog);

    gsap.to(fog,{

        x:gsap.utils.random(-250,250),

        y:gsap.utils.random(-120,120),

        duration:gsap.utils.random(12,25),

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

    });

}

for(let i=0;i<15;i++){

    createFog();

}



/*=========================================================
SPARK PARTICLES
=========================================================*/

const sparkLayer=document.createElement("div");

sparkLayer.id="sparkLayer";

document.body.appendChild(sparkLayer);

function spark(){

    const s=document.createElement("div");

    s.className="spark";

    s.style.left=Math.random()*window.innerWidth+"px";

    s.style.top=window.innerHeight+20+"px";

    sparkLayer.appendChild(s);

    gsap.to(s,{

        y:-window.innerHeight-200,

        x:gsap.utils.random(-120,120),

        opacity:0,

        duration:gsap.utils.random(4,8),

        ease:"none",

        onComplete(){

            s.remove();

        }

    });

}

setInterval(spark,300);



/*=========================================================
HORROR SOUND
=========================================================*/

const horrorAudio=new Audio(

"assets/sounds/horror-sound.mp3"

);

horrorAudio.loop=true;

horrorAudio.volume=.30;


const soundBtn=document.createElement("button");

soundBtn.id="soundToggle";

soundBtn.innerHTML="🔊";

document.body.appendChild(soundBtn);

let soundEnabled=false;

soundBtn.addEventListener("click",()=>{

    if(soundEnabled){

        horrorAudio.pause();

        soundBtn.innerHTML="🔇";

    }

    else{

        horrorAudio.play().catch(()=>{

            console.log("User interaction required.");

        });

        soundBtn.innerHTML="🔊";

    }

    soundEnabled=!soundEnabled;

});



/*=========================================================
PARALLAX HERO
=========================================================*/

window.addEventListener("mousemove",(e)=>{

    const hero=document.querySelector(".hero");

    if(!hero) return;

    const x=(e.clientX/window.innerWidth-.5)*15;

    const y=(e.clientY/window.innerHeight-.5)*15;

    hero.style.backgroundPosition=`${50+x}% ${50+y}%`;

});



/*=========================================================
WINDOW RESIZE
=========================================================*/

window.addEventListener("resize",()=>{

    bats.forEach(b=>{

        gsap.killTweensOf(b);

        animateBat(b);

    });

});



/*=========================================================
PERFORMANCE
=========================================================*/

document.querySelectorAll("img").forEach(img=>{

    img.loading="lazy";

});



let ticking=false;

window.addEventListener("scroll",()=>{

    if(!ticking){

        requestAnimationFrame(()=>{

            ticking=false;

        });

        ticking=true;

    }

});



/*=========================================================
WELCOME MESSAGE
=========================================================*/

setTimeout(()=>{

    toast("👻 Welcome to Hunted Restaurant!");

},2600);



/*=========================================================
FINAL INITIALIZATION
=========================================================*/

function initializeRestaurant(){

    console.log("==============================");

    console.log("👻 HUNTED RESTAURANT READY");

    console.log("Food Items :",foods.length);

    console.log("Cart Ready");

    console.log("Animations Loaded");

    console.log("GSAP Ready");

    console.log("AOS Ready");

    console.log("==============================");

}

initializeRestaurant();



console.log("Part 3C-2 Loaded Successfully");

/*=========================================================
PART 3D-4
Final Features
Today's Special
Chef Recommendation
Popular Foods
Featured Rotation
Restaurant Statistics
LocalStorage
Dark Theme Persistence
Final Initialization
=========================================================*/


/*=========================================================
LOCAL STORAGE
=========================================================*/

function saveData(){

    localStorage.setItem("hunted_cart",JSON.stringify(cart));

    localStorage.setItem("hunted_favorites",JSON.stringify(favorites));

}

function loadData(){

    const savedCart=localStorage.getItem("hunted_cart");

    const savedFav=localStorage.getItem("hunted_favorites");

    if(savedCart){

        cart=JSON.parse(savedCart);

    }

    if(savedFav){

        favorites=JSON.parse(savedFav);

    }

}

loadData();

updateCart();


/*=========================================================
SAVE AUTOMATICALLY
=========================================================*/

const oldUpdateCart=updateCart;

updateCart=function(){

    oldUpdateCart();

    saveData();

};


/*=========================================================
TODAY'S SPECIAL
=========================================================*/

function todaysSpecial(){

    const specials=foods.filter(food=>

        food.rating>=4.9

    );

    const random=

    specials[Math.floor(Math.random()*specials.length)];

    const card=document.getElementById("todaySpecial");

    if(!card) return;

    card.innerHTML=`

        <img src="${random.image}" class="img-fluid rounded">

        <h3>${random.name}</h3>

        <p>${random.description}</p>

        <h4>$${random.price}</h4>

    `;

}

todaysSpecial();



/*=========================================================
CHEF'S RECOMMENDATION
=========================================================*/

function chefChoice(){

    const chef=

    foods.filter(food=>food.tag==="Chef's Choice");

    const item=

    chef[Math.floor(Math.random()*chef.length)];

    const box=document.getElementById("chefChoice");

    if(!box) return;

    box.innerHTML=`

        <h3>👨‍🍳 Chef Recommends</h3>

        <img src="${item.image}" class="img-fluid rounded">

        <h4>${item.name}</h4>

        <p>${item.description}</p>

    `;

}

chefChoice();



/*=========================================================
POPULAR ITEMS
=========================================================*/

function renderPopular(){

    const container=document.getElementById("popularFoods");

    if(!container) return;

    const popular=

    foods

    .filter(food=>food.tag==="Popular")

    .slice(0,8);

    container.innerHTML="";

    popular.forEach(food=>{

        container.innerHTML+=`

        <div class="mini-card">

            <img src="${food.image}">

            <h5>${food.name}</h5>

            <span>$${food.price}</span>

        </div>

        `;

    });

}

renderPopular();



/*=========================================================
COMBO OFFERS
=========================================================*/

function comboOffers(){

    const combos=

    foods.filter(food=>food.category==="Combo");

    const box=document.getElementById("comboOffers");

    if(!box) return;

    box.innerHTML="";

    combos.forEach(combo=>{

        box.innerHTML+=`

        <div class="combo-card">

            <img src="${combo.image}">

            <h4>${combo.name}</h4>

            <p>${combo.description}</p>

            <button

            onclick="addToCart(${combo.id})"

            class="btn btn-danger">

            Order Now

            </button>

        </div>

        `;

    });

}

comboOffers();



/*=========================================================
FEATURED FOOD
=========================================================*/

function featuredFood(){

    const card=document.getElementById("featuredFood");

    if(!card) return;

    function update(){

        const item=

        foods[Math.floor(Math.random()*foods.length)];

        card.innerHTML=`

        <img src="${item.image}"

        class="img-fluid rounded">

        <h3>${item.name}</h3>

        <p>${item.description}</p>

        `;

    }

    update();

    setInterval(update,6000);

}

featuredFood();



/*=========================================================
RESTAURANT STATS
=========================================================*/

function restaurantStats(){

    const stats=document.getElementById("restaurantStats");

    if(!stats) return;

    stats.innerHTML=`

    <div class="stat">

        <h2>${foods.length}</h2>

        <p>Menu Items</p>

    </div>

    <div class="stat">

        <h2>25K+</h2>

        <p>Happy Customers</p>

    </div>

    <div class="stat">

        <h2>4.9</h2>

        <p>Average Rating</p>

    </div>

    <div class="stat">

        <h2>24/7</h2>

        <p>Open</p>

    </div>

    `;

}

restaurantStats();



/*=========================================================
DARK MODE
=========================================================*/

const themeButton=

document.getElementById("themeToggle");

let theme=

localStorage.getItem("hunted_theme")||"dark";

document.body.dataset.theme=theme;

if(themeButton){

themeButton.onclick=()=>{

theme=document.body.dataset.theme==="dark"

?"light":"dark";

document.body.dataset.theme=theme;

localStorage.setItem(

"hunted_theme",

theme

);

};

}



/*=========================================================
FEATURE ROTATION
=========================================================*/

setInterval(()=>{

todaysSpecial();

chefChoice();

},15000);



/*=========================================================
FINAL STARTUP
=========================================================*/

window.addEventListener("load",()=>{

console.log("================================");

console.log("👻 HUNTED RESTAURANT");

console.log("Frontend Initialized");

console.log("Foods :",foods.length);

console.log("Cart Loaded");

console.log("Favorites Loaded");

console.log("Today's Special Ready");

console.log("Chef Choice Ready");

console.log("Featured Rotation Ready");

console.log("Dark Mode Ready");

console.log("================================");

});

function clearFavorites(){

favorites=[];

renderFavorites();

saveData();

toast("Favorites Cleared");

}

function quickView(id){

    const food = foods.find(f => f.id == id);

    if(!food) return;

    const modal = document.getElementById("quickModal");

    modal.querySelector("img").src = food.image;

    modal.querySelector("h3").innerText = food.name;

    modal.querySelector("p").innerText = food.description;

    modal.querySelector(".price").innerText = "$" + food.price;

    modal.classList.add("show");

}
function closeQuickView(){

document.getElementById("quickModal")

.classList.remove("show");

}


searchInput.addEventListener("keyup",()=>{

const suggestions=foods

.filter(food=>

food.name

.toLowerCase()

.includes(searchInput.value.toLowerCase())

)

.slice(0,5);

});


function updateFloatingTotal(){

const total=

cart.reduce(

(sum,i)=>sum+i.price*i.qty,

0

);

document.getElementById("floatingTotal")

.innerHTML="$"+total.toFixed(2);

updateCart();
}
//Place Order Animation
function celebrateOrder(){

confetti({

particleCount:150,

spread:120,

origin:{y:.7}

});

}

//Loading Previous Cart Automatically
window.addEventListener("load",()=>{

loadData();

updateCart();

renderFavorites();

});

