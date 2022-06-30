import css from './FriendListItem.module.css'


export default function FriendListItem() {
    return (
        <li className={css.item}>
  <span className={css.status}></span>
  <img className={css.avatar} src="" alt="User avatar" width="48" />
  <p className={css.name}></p>
    </li>)
}