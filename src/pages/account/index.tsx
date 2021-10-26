import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import { useAppSelector } from '../../redux/hooks'
import useLogout from './hooks/useLogout';


const Account: React.FC = () => {
    const customer = useAppSelector(s => s.customer)
    const [logout] = useLogout()

    return (
        <Box className="loginregister">
            <Button onClick={logout} variant="contained">Logout</Button>
        </Box>
    )
}

export default Account