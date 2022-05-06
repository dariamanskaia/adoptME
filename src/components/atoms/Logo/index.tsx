import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import LogoIcon from 'assets/shared/logo.svg'
import queries from 'styles/breakpoints'

const StyledLink = styled(Link)`
  line-height: 1;
`

const Wrapper = styled.div`
  width: 12rem;
  img {
    width: 50rem;
  }
  svg {
    width: 150%;
    height: auto;
  }

  @media ${queries.laptopUp} {
    width: 10.625rem;
  }
`

const Logo = (): JSX.Element => {
  return (
    <StyledLink to="/adoptME">
      <Wrapper>
        <img src={LogoIcon} alt="AdoptME Logo - home" />
      </Wrapper>
    </StyledLink>
  )
}

export default Logo
