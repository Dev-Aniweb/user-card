import './UserCard.css';

function UserCard({ user }) {
  const { name, email, location, picture, phone } = user;

  return (
    <div className="card">
      <img src={picture.medium} alt="User" />
      <h3>{name.first} {name.last}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Location:</strong> {location.city}, {location.country}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  );
}

export default UserCard;

