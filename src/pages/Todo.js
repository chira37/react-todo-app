import React from "react";
import Container from "@material-ui/core/Container";
import { Box, Paper, Typography } from "@material-ui/core";
import { TodoAdd, TodoList, TodoFooter } from "../components";

export default function Todo() {
    return (
        <Container maxWidth="sm" style={{ minWidth: 600 }}>
            <Paper elevation={2}>
                <Box p={5} mt={10}>
                    <Typography component="div">
                        <Box mb={5} fontSize="h5.fontSize" fontWeight="fontWeightBold">
                            TODO LIST
                        </Box>
                    </Typography>
                    <TodoAdd />
                    <TodoList />
                    <TodoFooter />
                </Box>
            </Paper>
        </Container>
    );
}
