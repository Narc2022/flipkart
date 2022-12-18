import React from 'react'
import { InputBase,Box,styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: #fff;
    width:50%;
    border-radius:2px;
    margin:0 1%;
    display:flex;
    max-width: 564px;
`
const InputSearchBase = styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size: 14px;
`
const  SearchIconWrapper = styled(Box)`
    color:#2874f0;
    margin-top:4px;
    display:flex;
`
const Search = () => {
  return (
    <SearchContainer >
        <InputSearchBase
        placeholder='Search for products, brands and more'
        />
        <SearchIconWrapper>
             <SearchIcon />
        </SearchIconWrapper>
    </SearchContainer>
  )
}

export default Search