
import { use } from 'react';
import './App.css'
import { ProfileCard } from './components/ProfileCard';
import { ProductList } from './components/ProductList';
import { ReusableButton } from './components/ReusableButton';
import { ListOfFeatures } from './components/ListOfFeatures';
import { AlertBox } from './components/AlertBox';
import { ProgressBar } from './components/ProgressBar';
import RecipeCard from './components/RecipeCard.jsx/index.js';
import ContentSection from './components/ContentSection.jsx';

function App() {
  const userData = {
    name: "Alice Wonderland",
    email: "alice@example.com",
    avatarUrl: "https://placehold.co/100x100/A020F0/ffffff?text=AW"
  };

  //Product Data
  const productData = {
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    inStock: true
  };

  const appFeatures = [
    "Real-time updates",
    "User authentication",
    "Data export",
    "Customizable themes"
  ];
  const usersData = [
    { id: 1, name: "Charlie", isOnline: true },
{ id: 2, name: "Diana", isOnline: false },
{ id: 3, name: "Eve", isOnline: true }
];

const pizzaRecipe = {
  name: "Homemade Pizza",
  ingredients: [
    "Pizza dough",
    "Tomato sauce",
    "Mozzarella cheese",
    "Pepperoni",
    "Oregano"
  ],
  instructions: "Roll out dough. Spread sauce. Add cheese and toppings. Bake at 450°F for 12-15 minutes."
};

const inventoryItems = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Desk Chair", category: "Furniture" },
  { id: 3, name: "Monitor", category: "Electronics" },
  { id: 4, name: "Bookshelf", category: "Furniture" }
];

  return (
    <>
    <h3>**Challenge 1: Basic User Profile Card**</h3>
      <ProfileCard name={userData.name} 
                  email={userData.email}
                  avatarUrl = {userData.avatarUrl}
      />
        
      <h3>**Challenge 2: Product Listing Item**</h3>
      <ProductList data = {productData}/>

      <h3>**Challenge 3: Dynamic Button**</h3>
      <ReusableButton label="Submit Form"
        onClick={()=>alert('Form Submitted')}
      />

      <ReusableButton label="Disabled Button"
        isDisabled={true}
      />

      <h3>**Challenge 4: List of Features**</h3>
      <ListOfFeatures appFeatures={appFeatures}/>

      <h3>### **Challenge 5: Alert Message Box**</h3>
      <AlertBox message="Operation successfull" type="success"/>
      <AlertBox message="Something went wrong." type="error" />
      <AlertBox message="Warning ." type="warning" />


      <h3>**Challenge 6: Simple Progress Bar**</h3>
      <ProgressBar percentage={74}/>

      

      <UserList users={usersData} />
      <RecipeCard recipe = {pizzaRecipe
      }/>

        <ContentSection title="About Us">
          <p>We are a company dedicated to building user-focused web experiences.</p>
          <img src="https://placehold.co/150x100" alt="About Us" />
        </ContentSection>

        <ContentSection title="Contact Info">
          <ul>
            <li>Email: info@example.com</li>
            <li>Phone: 123-456-7890</li>
          </ul>
        </ContentSection>

       

// Show all
<FilterableList items={inventoryItems} />

// Show only Electronics
<FilterableList items={inventoryItems} filterCategory="Electronics" />

// Show only Furniture
<FilterableList items={inventoryItems} filterCategory="Furniture" />


    </>
  )
}

export default App
