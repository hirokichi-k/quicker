import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import request from 'superagent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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
    const [do_request, setRequest] = React.useState(true);
    const classes = useStyles();
    const [text, settext] = React.useState("tetx");

    const [open, setOpen] = React.useState(true);
    const [id_float, setid] = React.useState("400 Bad Request");
    const handleClose = () => {
        setOpen(false);
        setPush(false);
    };

    const URL = "http://34.83.242.238";
    const onclick_send = () => {
        setPush(true);
    };
    const callbackget = (err, res) => {
        if (err) {
            console.log(err);
            return
        }
        else {
            setid(res.body.id);
            setRequest(false);
            return
        }
    };
    const handleText = (event) => {
        settext(event.target.value);
    };

    const popup_floatwindow = (is_pushed) => {
        if (is_pushed) {
            if (do_request) {
                console.log("text");
                console.log(text);
                request.post(URL).
                    set('Content-Type', 'application/json').send({ "message": text }).end(callbackget);

            }
            else {
                console.log(id_float);
                console.log(text);
                return (
                    <div>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"テキストを受け付けました."}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                            以下の6桁の番号を受信する側の端末で入力してください
                            </DialogContentText>
                            {id_float}
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} color="primary" autoFocus>
                                    OK
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                );
            }

        }
    };
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField onChange={handleText} id="basic" label="送信したいテキストを入力してください" />
            </form>
            <Button variant="contained"  color ="primary" onClick={onclick_send}>テキスト送信</Button>
            {popup_floatwindow(is_pushed)}
        </div>

    );
}
