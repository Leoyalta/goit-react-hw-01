import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const statusClasses = clsx(isOnline ? css.isOnline : css.isOffline);
  return (
    <div className={css.box}>
      <img src={avatar} alt={name} width={80} />
      <p className={css.text}>{name}</p>
      <p className={statusClasses}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
