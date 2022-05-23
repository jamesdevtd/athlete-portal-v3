import { getSession } from "next-auth/react";

import ContentWrap from "@/components/layout/ContentWrap";
import Layout from "@/components/layout/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <ContentWrap className='h-96'>
        <h1>Dashboard</h1>
      </ContentWrap>
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
  return {
    props: { session }
  }
}