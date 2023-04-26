import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import { GetSessionParams, getSession } from "next-auth/react";

export default function Home(props: { session: any }) {
  if (!props.session) return <Login />;

  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main>
        {/* SideBar */}
        {/* Feed */}
        {/* Widget */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context: GetSessionParams) {
  // get the user
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
