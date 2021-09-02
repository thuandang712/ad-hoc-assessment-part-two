import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Make state of loading, users, showAdress */}
      {/* Make componentdidmount that reaches out to 
        https://jsonplaceholder.typicode.com/users
      */}
    {/* Set the users state with data you get back */}
    {/* Set loading to true while data is being fetched and render loading component */}
    {/* when loading is false (conditional rendering) render the users component that loops through props of users and renders userItem component */}
    {/* Look at data you get back. Notice what you have access to */}
    {/* create a button in the users component that allows change in the showAddress(boolean) state */}
      {/* If the showaddress boolean is true, show all addresses of users */}
    </div>
  );
}

export default App;
