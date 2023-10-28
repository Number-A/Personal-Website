import styles from "./App.module.css";

export default function App() {
  return (
    <div className="home-layout">
      <div className={styles.menuBar}>
        <img className={styles.logo} src="/logo192.png" />
        <div className={styles.btns}>
          <a className={styles.menuItem} href="#">
            menu item 1
          </a>
          <a className={styles.menuItem} href="#">
            menu item 2
          </a>
          <a className={styles.menuItem} href="#">
            menu item 3
          </a>
        </div>
      </div>
      <header className={styles.poster}>
        <h1>Theo Badele</h1>
      </header>
      <div className="quote">Quote</div>
      <div className="personalies">Peronalities</div>
      <div className="carousel">Carousel</div>
      <div className="footer">Footer</div>
    </div>
  );
}
