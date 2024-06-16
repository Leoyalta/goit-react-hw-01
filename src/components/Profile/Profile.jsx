import css from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.box}>
        <img className={css.image} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.leftItem}>
          <span className={css.category}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.category}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.rightItem}>
          <span className={css.category}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
