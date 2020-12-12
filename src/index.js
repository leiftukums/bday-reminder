import React, { useState } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from 'uuid';


const FriendList = () => {
  const [friendList, setFriendList] = useState([]);
  const [friendInput, setFriendInput] = useState('');
  // const [friendBirthday, setFriendBirthday] = useState([]);
  const [birthdayInput, setBirthdayInput] = useState('');
  const id = uuidv4();

  const addFriend = event => {
    event.preventDefault();
    setFriendList([
      ...friendList,
      {
        id: id,
        name: friendInput,
        birthday: birthdayInput
      }
    ]);
    setFriendInput('');
    setBirthdayInput('')
  }

  const deleteFriend = (id) => {
    const newFriendList = friendList.filter((friend) => friend.id !== id);
    setFriendList(newFriendList);
  }

  return (
    <div>
      <div className='header'>
        <h1>Never forget a birthday again!</h1>
      </div> 
      <div className='friendlist'>
        <p>You've got {friendList.length} upcoming birthdays:</p>
        <ul>
          {friendList.map(friend => (
            <li key={friend.id}>{friend.name}'s birthday is {friend.birthday}
            <button onClick={() => deleteFriend(friend.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <form className='input-form'>
        <input 
          name='name'
          type='text'
          value={friendInput}
          onChange={e => setFriendInput(e.target.value)}
          placeholder='Add a friend'
        />
        <input 
          name='birthday'
          type='date'
          value={birthdayInput}
          onChange={e => setBirthdayInput(e.target.value)}
          placeholder='Add friends birthday'
        />
        <button 
          type='button' 
          value='button' 
          onClick={addFriend}
        >Add Friend
        </button>
      </form>
    </div>
  )
}



ReactDOM.render(<FriendList />, document.getElementById("root"));
