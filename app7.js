import logo from './logo.svg';
import './App.css';

import UserCard from './UserCard';

function App() {
  const user = [
    {
      Name: 'Rapheal Peters',
      Location: 'Mars, Milky way',
      FoodType: 'Strict Canivore',
      Age: 25,
      Likes: 'Coding and Debugging',
      Twitter: '@Okolo_2',
      TwitterLink:<a href="https://twitter.com/@Okolo_2">@Okolo_2</a>,
      Avatar: 'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    },
    {
      Name: 'Lionel Andreas Messi',
      Location: 'Nou Camp',
      FoodType: 'Chocolates',
      Age: 35,
      Likes: 'Making players lay down on green pastures',
      Twitter: 'ChrisBates45',
      TwitterLink:<a href="https://twitter.com/chrisoncode">@bates45</a>,
      Avatar: 'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    }
  ]
  return (
    <div className="App">

     <UserCard myUser = {user}/>
    </div>
  );
}

export default App;