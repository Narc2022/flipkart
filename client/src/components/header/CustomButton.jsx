import { Box ,Button, Typography,styled} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'


const Wrapper = styled(Box)`
display:flex;
margin: 0px 3vw 0px auto;
&& > BUTTON,&>p,&>div{
    margin-right:40px;
    font-size:16px;
    align-items:center;
}
`
const LoginButon =  styled(Button)`
color:#2874f0;
background:#fff;
text-transform:none;
padding: 2.5px 40px;
box-shadow: none;
font-weight:600;
`
const Container = styled(Box)`
display:flex;
`
const CustomButton = () => {
    return (
        <Wrapper>
            <LoginButon variant="contained">Login</LoginButon>
            <Typography style={{marginTop:3,Width:135}}>Become a seller</Typography>
            <Typography>More</Typography>
            <Container>
                <ShoppingCartIcon/><Typography>Cart</Typography>
            </Container>
        </Wrapper>
    )
}

export default CustomButton