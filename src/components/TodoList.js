import { Box, Typography, List } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "spaceBetween",
        backgroundColor: "gray",
    },
}));

export default function TodoList() {
    const { items } = useSelector((state) => state.todo);

    return (
        <List>
            {items
                ?.slice(0)
                .reverse()
                .map((item) => (
                    <TodoItem key={item.id} item={item} />
                ))}

            {items.length === 0 && (
                <Typography>
                    <Box p={5} textAlign="center">
                        No todo items
                    </Box>
                </Typography>
            )}
        </List>
    );
}
