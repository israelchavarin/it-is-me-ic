import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Israel Chavarín</p>
        <div>
          <a
            href='https://www.linkedin.com/in/israelchavarin/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Software Engineer & Web Developer
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1 className={styles.heading}>Projects</h1>
      </div>

      <div className={styles.grid}>
        <a
          href='https://hydraingenieria.com/'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Hidraingeniería <span>-&gt;</span>
          </h2>
          <p>
            Company&apos;s website developed with Next.js for the frontend &
            Strapi mounted in an AWS EC2 for the backend (no longer online for
            the moment), with capabilities such as user management, Q&A
            participation, payments processing & Google maps integration.
          </p>
        </a>

        <a
          href='https://github.com/israelchavarin/pgoi'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Investment Operations Management Platform <span>-&gt;</span>
          </h2>
          <p>
            Frontend under development, backend developed with Node.js, Express,
            Sequelize, PostgreSQL, JWT and Docker.
          </p>
        </a>
      </div>
    </main>
  );
}
