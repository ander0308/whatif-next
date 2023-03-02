import Image from 'next/image'
import Link from 'next/link'

import { HeaderStyle } from './styles'

import Logo from '../../assets/logo.svg'
import LogoCodeboost from '../../assets/logo-codeboost.svg'

import { Container } from "../../styles/global"

function Header() {
  return (
    <HeaderStyle>
      <Container>
        <div className='logo'>
          <Link href="/">
            <Image src={Logo} alt="Logo Marvel" />
          </Link>
        </div>
        <div className='code'>
            <Image src={LogoCodeboost} alt="Logo codeboost" />
        </div>
      </Container>
    </HeaderStyle>
  )
}

export default Header
