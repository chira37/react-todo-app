import { Box, Button, Typography, Grid, TextField, Divider } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { removeItem, updateItem, markComplete } from "../redux/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2, 0, 2, 0),
    },
    editButton: {
        minWidth: 30,
        height: 30,
        padding: theme.spacing(0),
 

        marginLeft: theme.spacing(2),
    },

    deleteButton: {
        minWidth: 30,
        height: 30,
        padding: theme.spacing(0),
        "&:hover": {
            backgroundColor: theme.palette.error.dark,
        },
        backgroundColor: theme.palette.error.main,

        marginLeft: theme.spacing(2),
    },

    completeButton: {
        minWidth: 30,
        height: 30,
        padding: theme.spacing(0),
        marginLeft: theme.spacing(2),
        "&:hover": {
            backgroundColor: theme.palette.success.dark,
        },
        backgroundColor: theme.palette.success.main,
    },
}));

export default function TodoItem({ item }) {
    const classes = useStyles();

    const { id, content, complete } = item;

    const dispatch = useDispatch();

    const [input, setInput] = useState(content);
    const [edit, setEdit] = useState(false);

    const handleComplete = () => dispatch(markComplete(id));
    const handleDelete = () => dispatch(removeItem(id));
    const handleEdit = () => setEdit(true);
    const handleCancel = () => setEdit(false);

    const handleUpdate = () => {
        if (input === "") {
            setEdit(false);
            setInput(content);
            return;
        }
        dispatch(updateItem({ id: id, content: input }));
        setEdit(false);
    };

    if (!edit) {
        return (
            <div>
                <Grid className={classes.root} container justify="space-between" alignItems="center">
                    <Grid item>
                        <Typography >
                            <Box  style={{ maxWidth: 300, textDecoration: complete ? "line-through" : "none" }}>
                                {content}
                            </Box>
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Button
                            onClick={handleEdit}
                            className={classes.editButton}
                            color="primary"
                            size="small"
                            variant="contained"
                            disableElevation
                            disabled={complete}
                        >
                            <EditIcon fontSize="small" />
                        </Button>
                        <Button
                            onClick={handleComplete}
                            className={classes.completeButton}
                            color="secondary"
                            size="small"
                            variant="contained"
                            disableElevation
                            disabled={complete}
                        >
                            <DoneIcon fontSize="small" />
                        </Button>
                        <Button
                            onClick={handleDelete}
                            className={classes.deleteButton}
                            color="secondary"
                            size="small"
                            variant="contained"
                            disableElevation
                        >
                            <DeleteIcon fontSize="small" />
                        </Button>
                    </Grid>
                </Grid>
                <Divider light />
            </div>
        );
    } else {
        return (
            <div>
                <Grid className={classes.root} container direction="row" justify="space-between" alignItems="center">
                    <TextField
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        variant="outlined"
                        size="small"
                    />

                    <div>
                        <Button
                            onClick={handleCancel}
                            color="primary"
                            size="small"
                            //variant="contained"
                            disableElevation
                            disabled={complete}
                        >
                            CANCEL
                        </Button>

                        <Button
                            onClick={handleUpdate}
                            color="primary"
                            size="small"
                            //variant="contained"
                            disableElevation
                            disabled={complete}
                        >
                            SAVE
                        </Button>
                    </div>
                </Grid>
                <Divider />
            </div>
        );
    }
}
