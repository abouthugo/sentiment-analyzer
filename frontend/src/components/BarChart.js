import React from 'react';
import styled from 'styled-components';
import {ResponsiveBar} from '@nivo/bar';
import * as configs from '../configs/bar.config'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`


export default ({data}) => {
  return (
    <Container>
      <ResponsiveBar {...configs} data={data}/>
    </Container>
  )
}