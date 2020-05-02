import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CopyToClipboard from 'react-copy-to-clipboard';


export default function AlertDialog() {

    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    const [copied, setState] = React.useState(false);

    const state = {value: 'sample text', copied: false};

    const onChange = ({target: {value}}) => {
        setState({value, copied: false});
    };

    const onCopy = () => {
        setState({copied: true})
    };

    return (
        <div>
            <Dialog
                open={open}
                state={state}
                onClose={handleClose}
                copied={copied}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"認証成功"}</DialogTitle>
                <textarea onChange={onChange} value={state.value} />
                <CopyToClipboard onCopy={onCopy} text={state.value}>
                    <button id="bt3">Copy!!</button>
                </CopyToClipboard>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        OK
            </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
