import Link from "next/link";
import styles from "./Projects.module.css";

const page = () => {
  return (
    <main>
      <h1>Project List</h1>

      <ul className={styles.ul}>
        <li>
          <Link href="/projects/jobit">Jobit</Link>
        </li>
        <li>
          <Link href="/projects/carrent">Car Rent</Link>
        </li>
        <li>
          <Link href="/projects/hipnode">hipNode</Link>
        </li>
      </ul>
    </main>
  );
};

export default page;
