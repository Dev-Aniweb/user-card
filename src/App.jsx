import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserCard from './components/UserCard';

const API_URL = 'https://randomuser.me/api/?results=100';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setUsers(data.results))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <>
      <Navbar />
      <main className="card-grid">
        {users.map((user, i) => (
          <UserCard key={i} user={user} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
