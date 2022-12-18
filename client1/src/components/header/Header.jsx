import React from 'react'
import { AppBar, Toolbar, styled, Box, Typography } from '@mui/material';
import Search from './Search';
import CustomButton from './CustomButton';
const StyledHeader = styled(AppBar)`
background:#2874f0;
height:55px;
`;
const ComponentBox = styled(Box)`
margin-left:12%;
`;
const SubHeading = styled(Typography)`
font-size:10px;
font-style:italic;
`;
const CustomBottonWrapper = styled(Box)`
margin: 0 5% 0 auto
`

const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <ComponentBox>
          <img src={logoURL} alt="logo" style={{ width: 75, }} />
          <Box style={{ display: 'flex' }}>
            <SubHeading>Explore  <Box component="span" style={{ color: "#ffe500" }}>
              Plus
            </Box>
              <img src={subURL} alt="logo" style={{ width: 10, marginLeft: 3 }} /></SubHeading>
          </Box>
        </ComponentBox>
        <Search />
        <CustomBottonWrapper>
          <CustomButton />
        </CustomBottonWrapper>
      </Toolbar>
    </StyledHeader>
  )
}

export default Header