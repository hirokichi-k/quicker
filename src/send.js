import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FloatWindow from './FloatWindow.js'


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100ch',
        },
    },
}));




export default function RecieveBox() {

    const [is_pushed, setPush] = React.useState(false);
    const classes = useStyles();
    const onclick_send = () => {
        setPush(true);
    };
    const popup_floatwindow = (is_pushed) => {
        console.log(is_pushed);
        if (is_pushed) {
            return <FloatWindow />
        }
    };
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="送信したいテキストを入力してください" />
            </form>
            <Button variant="contained" color ="primary" onClick={onclick_send}>テキスト送信</Button>
            {popup_floatwindow(is_pushed)}
        </div>

    );
}
