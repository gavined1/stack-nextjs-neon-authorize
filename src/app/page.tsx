import { Suspense } from 'react';
import { Header } from "@/components/Header";
import styles from "../styles/Home.module.css";
import { stackServerApp } from "@/utils/stack";
import Loading from "@/components/loading";

export default async function Home() {
  let user;
  try {
    user = await stackServerApp.getUser();
  } catch (error) {
    console.error("Error fetching user:", error);
    return <div>Error loading user data.</div>;
  }

  let content = null;
  if (user) {
    content = (
      <main className={styles.main}>
        <div className={styles.container}>
          <Suspense fallback={<Loading />}>
          </Suspense>
        </div>
      </main>
    );
  } else {
    content = <div>Please log in to see your todos.</div>;
  }

  return (
    <>
      <Header />
      {content}
    </>
  );
} 