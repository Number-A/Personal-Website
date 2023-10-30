import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.homeLayout}>
      <NotificationBar />
      <Header>
        <Title></Title>
      </Header>
      <NavigationMenu></NavigationMenu>
      <span>content</span>
      <span>main content</span>
      <content>content</content>
      <footer>Footer</footer>
    </div>
  );
}

function NavigationMenu() {
  return (
    <div className={styles.navigationMenuBox}>
      <nav className={styles.navigationMenu}>
        <ul className={styles.navigationMenuItems}>
          <li>
            <a href="#">Author</a>
          </li>
          <li>
            <a href="#">Developer</a>
          </li>
          <li>
            <a href="#">Gamer</a>
          </li>
          <li className={styles.navigationMenuDropdown}>
            <select>
              <option value="story">Story</option>
              <option value="interest">Interest</option>
              <option value="ambition">Ambitions</option>
            </select>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function NotificationBar() {
  return (
    <div className={styles.notificationBar}>
      <a className={styles.notificationLink}>Join my discord</a>
    </div>
  );
}

function Header({ children }) {
  return (
    <div className={styles.headerBox}>
      <header>{children}</header>
    </div>
  );
}

function Title() {
  return (
    <div className={styles.mainTitle}>
      <h1 className={styles.mainTitleText}>
        <span>Theodor Badele</span>
        <span>Developer, minecraft player and writer</span>
      </h1>
    </div>
  );
}
