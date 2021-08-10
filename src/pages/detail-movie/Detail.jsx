import React from "react";
import ShowTime from "../../components/show-time/ShowTime";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetailAction } from "../../store/actions/MovieAction";
import {
    Container,
    Grid,
    Typography,
    Modal,
    Backdrop,
    Fade,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./detail.css";

// set up modal
const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Detail() {
    // Lấy mã phim trên url
    const params = useParams();
    // Lấy phim trên store, trạng thái load
    const movie = useSelector((state) => state.movie.movieDetail);
    const loading = useSelector((state) => state.common.loading);

    // Set up modal trailer
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();

    // Mỗi khi mã phim trên url thay đổi, gọi lại api
    useEffect(() => {
        dispatch(getMovieDetailAction(params.maphim));
    }, [dispatch, params.maphim]);

    if (loading) {
        return (
            <div>
                <h1>...Loading</h1>
            </div>
        );
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <iframe
                            title={movie.tenPhim}
                            style={{ width: 500, height: 450 }}
                            src={movie.trailer}
                            frameBorder="0"
                        ></iframe>
                    </div>
                </Fade>
            </Modal>
            <Container className="wrapper">
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={3}
                        lg={4}
                        onClick={handleOpen}
                    >
                        <img src={movie.hinhAnh} alt={movie.hinhAnh} />
                    </Grid>
                    <Grid item lg={8} md={9} sm={12} xs={12}>
                        <Typography>{movie.tenPhim}</Typography>
                    </Grid>
                </Grid>
                {/* Hiện lịch chiếu showtime */}
                <section className="show-time">
                    <ShowTime />
                </section>
            </Container>
        </div>
    );
}

export default Detail;
