import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
        minHeight: 350,
    },
    title: {
        fontSize: 14,
    },
});

export default function BJCard({singleCard}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>
                    {singleCard.num}
                </Typography>
            </CardContent>
        </Card>
    );
}
