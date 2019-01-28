import React, {useState} from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { Box, Headline, Container, Row, Col, Button } from 'tt-react-ui-2'
import posed, { PoseGroup } from 'react-pose'

// Components:
import { AnimatedBox } from 'atoms/AnimatedBox'
import {Hr} from 'atoms/Hr'
import { Login } from 'components/Login'
import {Register} from 'components/Register'

// Styles:
import './style.css'

// Images:
import logo from 'assets/images/logo.png'

// const
const FadeBox = posed(AnimatedBox)({
  preEnter: {
    opacity: 0,
    y: '20%'
  },
  enter: {
    staggerChildren: 200,
    beforeChildren: true,
    opacity: 1,
    y: '0',
    duration: 300,
    delay: 300
  }
})



// ================================================================================================

export interface AuthProps {}

export const Auth: React.FunctionComponent<AuthProps> = ({}) => {

  const [isLogin, setLogin] = useState(true)
  return (
    <Container className={cx('Auth')} fluid items="center" py="10">
      <Row justify="center">
        <Col className="Auth-form" cols="10, md:6, lg:5">
          <PoseGroup preEnterPose="preEnter" animateOnMount>
            <FadeBox className="w-full flex flex-col bg-box px-12 py-6" key="form">
              <Box className="Auth-header" justify="center" items="center">
                <img alt="logo" className="Auth-logo w-12" src={logo} />
                <Headline level="1" ml="4">
                  events.io
                </Headline>
              </Box>
              <Hr my="6"/>
              {isLogin ? <Login setLogin={setLogin}/> : <Register setLogin={setLogin}></Register>}
            </FadeBox>
          </PoseGroup>
        </Col>
      </Row>
    </Container>
  )
}
