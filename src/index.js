import React, { useState } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from 'uuid';
import './sass.scss';


const FriendList = () => {
  const [friendList, setFriendList] = useState([]);
  const [friendInput, setFriendInput] = useState('');
  const [birthdayInput, setBirthdayInput] = useState('');
  const [giftInput, setGiftInput] = useState('');
  const id = uuidv4();

  const addFriend = event => {
    event.preventDefault();
    setFriendList([
      ...friendList,
      {
        id: id,
        name: friendInput,
        birthday: birthdayInput,
        gift: giftInput
      }
    ]);
    setFriendInput('');
    setBirthdayInput('');
    setGiftInput('')
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
      <p>Upcoming birthdays: </p>
      <div className='friendlist'>
        <p>You've got {friendList.length} upcoming birthdays:</p>
        <ul>
          {friendList.map(friend => (
            <li key={friend.id}>{friend.name}'s birthday is {friend.birthday} 
            <button 
                onClick={() => deleteFriend(friend.id)}
                className='button'
                >Remove</button>
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
        <textarea
          className='text-area'
          name='gift'
          type='text'
          value={giftInput}
          onChange={e => setGiftInput(e.target.value)}
          placeholder='Got an idea for a gift?'
        />
        <button
          className='button'
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
