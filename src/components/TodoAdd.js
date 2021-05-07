import { TextField, Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(3),

    },

    mainContainer: {
        display: "flex",
    },

    addButton: {
        marginLeft: theme.spacing(2),
    },
}));

export default function AddTodo() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [error, setError] = useState("");
    const [input, setInput] = useState("");

    const handleAdd = () => {
        setError("");
        if (input === "") {
            setError("You can't add empty todo");
            return;
        }

        const item = {
            id: Date.now(),
            content: input,
            complete: false,
        };

        dispatch(addItem(item));
        setInput("");
    };

    return (
        <div className={classes.root}>
            <div className={classes.mainContainer}>
                <TextField
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    error={Boolean(error)}
                    fullWidth
                    variant="outlined"
                    size="small"
                />
                <Button
                    className={classes.addButton}
                    onClick={handleAdd}
                    variant="contained"
                    color="primary"
                    disableElevation
                >
                    ADD
                </Button>
            </div>
            <Typography variant="caption" color="secondary">
                {error}
            </Typography>
        </div>
    );
}
