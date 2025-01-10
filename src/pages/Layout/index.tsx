import { Outlet } from 'react-router-dom'
import { Main } from './styles'
import { ComponentFooter, ComponentHeader } from '../../components'

export const Layout = () => {
  return (
    <>
      <ComponentHeader />
      <Main>
        <Outlet />
      </Main>
      <ComponentFooter />
    </>
  )
}