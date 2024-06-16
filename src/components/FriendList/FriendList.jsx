import css from './FriendList.module.css'
import FriendListItem from './FriendListItem/FriendListItem'

export default function FriendList({friends}) {
    return (
    <ul className={css.list}>
    {friends.map((item) => (
   <li className={css.item} key={item.id}>
    <FriendListItem friend = {item}/>
   </li>
    ))}
  </ul>
    )
}