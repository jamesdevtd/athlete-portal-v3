import ContentWrap from '@/components/layout/ContentWrap'
import Layout from '@/components/layout/Layout'
import { GetServerSideProps } from 'next'
import React from 'react'
import EventBanner from './EventBanner'
import EventHeader from './EventHeader'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    try {
      const id = params?.id
      // TODO: get current event Data on server before loading and store to redux using use next-redux-wrapper 
      // const eventData = ....
      // By returning { props: eventData }, the Events component
      // will receive `eventData` as a prop at build time
      return { props: { id } }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return { props: { errors: err.message } }
    }
  }

type Props = {
    id: number
}

export default function Event({ id }: Props) {
  return (
      <Layout>
          <ContentWrap className={`event-id-${id} max-w-7xl`}>
            <EventHeader />
            <EventBanner />
          </ContentWrap>
      </Layout>
  )
}