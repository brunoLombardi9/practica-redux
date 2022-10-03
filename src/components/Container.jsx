import { Grid } from '@mui/material'
import React from 'react'

const Container = ({ children }) => {
    return (
        <Grid
            component="header"
            width="100vw"
            minHeight="100vh"
            backgroundColor="#242424"
            display="flex"
            justifyContent= "center"
            alignItems="center"
        >
            {children}
        </Grid>
    )
}

export default Container