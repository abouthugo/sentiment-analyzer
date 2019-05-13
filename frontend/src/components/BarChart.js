import React from 'react';
import styled from 'styled-components';
import {ResponsiveBar} from '@nivo/bar';
import * as configs from '../configs/bar.config'
import barData from '../configs/bar.data'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`


export default () => {
  return (
    <Container>
      <ResponsiveBar {...configs} data={barData}/>
    </Container>
  )
}