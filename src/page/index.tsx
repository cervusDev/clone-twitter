import React from 'react'
import { Layout } from '../global/components/Layout'
import { Main } from '../components/main'
import { Menubar } from '../components/menubar'

export const Page: React.FC = () => {
  return (
    <Layout>
      <Menubar />
      <Main />
    </Layout>
  );
}
