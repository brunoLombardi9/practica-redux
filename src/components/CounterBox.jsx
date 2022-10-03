import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { counterActions } from '../store'

const CounterBox = () => {
    const counter = useSelector(state => state.counter.counter);
    const dispatch = useDispatch();

    function addHandler() {
        dispatch(counterActions.increment());
    }

    function decrementHandler() {
        dispatch(counterActions.decrement());
    }


    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            backgroundColor="#f1edf8"
            borderRadius="5px"
            padding="1rem"
            width={{ xs: "40%", md: "45%" }}
            sx={{
                justifyContent: "center"
            }}
        >


            <Typography fontSize="3rem" textAlign="center">Contador Redux</Typography>

            <Typography fontSize="2rem" textAlign="center" color="success.main">{counter}</Typography>

            <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                justifyContent="center"

            >
                <Button variant="contained" color="success" sx={{ margin: "1rem" }} onClick={decrementHandler}><RemoveCircleIcon/></Button>
                <Button variant="contained" color="success" sx={{ margin: "1rem" }} onClick={addHandler} ><AddCircleIcon/></Button>

            </Box>

        </Box>
    )
}

export default CounterBox