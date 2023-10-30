import styles from "./App.module.css";

export default function App() {
  return (
    <div>
      <Sidebar />
      <div className={styles.main}>
        <div className={styles.notificationBar}>NotificationBar</div>
        <div className={styles.header}>Header</div>
        <div className={styles.content}>Content</div>
        <div className={styles.recent}>Recent</div>
        <div className={styles.footer}>Footer</div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}></div>
      <div className={styles.menu}>Menu</div>
      <div className={styles.search}>Search</div>
      <div className={styles.sidebarFooter}>SidebarFooter</div>
    </div>
  );
}
