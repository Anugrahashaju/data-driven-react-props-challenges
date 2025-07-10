import React from 'react';

const UserList = ({ users }) => {
  const userStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
    fontSize: '16px',
  };

  const statusDot = (isOnline) => ({
    height: '10px',
    width: '10px',
    borderRadius: '50%',
    backgroundColor: isOnline ? 'green' : 'red',
    marginRight: '8px',
  });

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} style={userStyle}>
          <span style={statusDot(user.isOnline)}></span>
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default UserList;
