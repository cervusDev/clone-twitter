import React from 'react'
import { Main } from '../components/main'
import { Menubar } from '../components/menubar'
import { Sidebar } from '../components/sidebar'
import { Layout } from '../global/components/Layout'

export const Page: React.FC = () => {
  return (
    <Layout>
      <Menubar />
      <Main />
      <Sidebar />
    </Layout>
  );
}
