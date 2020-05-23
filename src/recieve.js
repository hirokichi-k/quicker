import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import request from 'superagent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CopyToClipboard from 'react-copy-to-clipboard';




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
    const [text, setText] = React.useState("入力された番号が間違っています");
    const [id, setid] = React.useState("0");
    const classes = useStyles();
    const onclick_send = () => {
        setPush(true);
    };
    const [copied, setState] = React.useState(false);
    const state = {value: text, copied: false};
    const onChange = ({target: {value}}) => {
        setState({value, copied: false});
    };
    const onCopy = () => {
        setState({copied: true})
    };
    const URL = "https://quicker.ml/";
    const [open, setOpen] = React.useState(true);
    const [do_request, setRequest] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
        setPush(false);
    };
    const handleId = (event) => {
        setid(event.target.value);
    };

    var excessbox = null
    const callbackget = (err, res) => {
        if (err) {
            console.log(err);
            return
        }
        else {
            setText(res.body.message);
            return
        }
    }
    const loaddata = (is_pushed) => {
        if (is_pushed) {
            if (do_request) {
                request.get("https://quicker.ml/?id="+id).end(callbackget)
                setRequest(false);
                return
            }

            else {
                return (
                    <div>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            state={state}
                            copied={copied}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"テキストを受け付けました."}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    送信されたメッセージ
                        </DialogContentText>
                        <textarea onChange={onChange} value={state.value} />
                        <CopyToClipboard onCopy={onCopy} text={state.value}>
                            <button id="bt3">Copy!!</button>
                        </CopyToClipboard>
                                {/* <h3>{text}</h3> */}
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    OK
                        </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                );
            }
        }

    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    onChange={handleId}
                    id="standard-basic"
                    onKeyDown={(e) => {
                        if (e.keyCode == '13'){
                            onclick_send()
                        }
                    }}
                    label="6桁の数字を入力してください"
                />
            </form>
            <Button variant="contained" color="primary" onClick={onclick_send}>テキスト受信</Button>
            {loaddata(is_pushed)}
        </div>

    );
}
