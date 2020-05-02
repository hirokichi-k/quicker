import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog() {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
    setOpen(false);
    };

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
