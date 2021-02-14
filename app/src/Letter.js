import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import getDistance from './keyDistances';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: "auto",
    marginTop: "2%",
  },
});

export default function Letter(props) {
  const classes = useStyles();
  const [typed, setTyped] = useState({
    idx: 0,
    text: "",
    letter: ""
  });

  useEffect(() => {
    const {prefix, letter} = props;
    setTyped({
      idx: prefix.length,
      text: prefix,
      letter: letter,
    })
  }, [props.prefix])

  useEffect(() => {
    const idx = typed.idx;
    if (!typed.letter || idx >= typed.letter.length) return;

    const prevChar = idx == 0 ? '-' : typed.letter[idx - 1];
    const currChar = typed.letter[idx];
    const keyStrokeDelay = getDistance(prevChar, currChar) * 4;

    const timeoutID = setTimeout(() => {
      setTyped({
        ...typed,
        idx: idx + 1,
        text: typed.text + currChar
      })
    }, keyStrokeDelay);

    return () => clearTimeout(timeoutID);
  }, [typed])

  return (
    <div className={classes.root}>
      <Typography variant="body1" align="left" gutterBottom>
        { typed.text }
      </Typography>
    </div>
  );
}
