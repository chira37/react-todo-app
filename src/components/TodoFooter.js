import { Box, Button, Typography, Grid, TextField, Divider } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { clearAll } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4, 0, 0, 0),
    },
    clearAllButton: {
        "&:hover": {
            backgroundColor: theme.palette.error.dark,
        },
        backgroundColor: theme.palette.error.main,
    },
}));

export default function TodoFooter() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.todo);
    const handleClearAll = () => {
        dispatch(clearAll());
    };

    return (
        <Grid className={classes.root} container direction="row" alignItems="center">
           { items.length > 1 && <Button
                onClick={handleClearAll}
                className={classes.clearAllButton}
                color="secondary"
                variant="contained"
                disableElevation
            >
                Clear All
            </Button>}
        </Grid>
    );
}
