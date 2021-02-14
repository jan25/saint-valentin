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

export default function Letter() {
  const classes = useStyles();
  const [typed, setTyped] = useState({ idx: 0, text: "" })

  useEffect(() => {
    const idx = typed.idx;
    if (idx >= letter.length) return;

    const prevChar = idx == 0 ? '-' : letter[idx - 1];
    const currChar = letter[idx];
    const keyStrokeDelay = getDistance(prevChar, currChar) * 4;

    setTimeout(() => {
      setTyped({
        idx: idx + 1,
        text: typed.text + currChar
      })
    }, keyStrokeDelay);
  }, [typed.text])

  return (
    <div className={classes.root}>
      <Typography variant="body1" align="left" gutterBottom>
        { typed.text }
      </Typography>
    </div>
  );
}

// const letter = "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit,"
const letter = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim interdum orci, ac mattis ipsum luctus id. Mauris facilisis, sem in vehicula aliquam, tellus nisl eleifend massa, eget mattis neque lacus nec elit. Sed at lacus lorem. Quisque lobortis diam id odio consequat suscipit. Quisque aliquet risus at rutrum euismod. Mauris diam ex, laoreet nec turpis at, finibus auctor risus. Integer sollicitudin a tortor at tincidunt. Quisque placerat leo eget augue placerat, eget mattis neque ornare. Vestibulum ultrices ante ut ipsum commodo feugiat. Morbi id vestibulum nisi. Curabitur fringilla, sem eu tempor commodo, tortor est venenatis tellus, at interdum ligula risus in elit.

Cras nec sodales erat. Nam risus ipsum, sagittis vel vehicula a, aliquam nec turpis. Praesent et pellentesque risus. Fusce laoreet tortor et sem maximus sollicitudin. Integer augue odio, porta id sem sit amet, placerat interdum risus. Aenean eu magna in lacus aliquet mattis vel et mi. Sed dictum tortor et metus pellentesque, sit amet vehicula metus lobortis. Suspendisse eu mauris nec orci aliquet eleifend. Aliquam tempus, sapien ut accumsan vestibulum, sem neque ultrices ligula, eget facilisis ligula orci quis nibh. Nunc vitae interdum leo. Aliquam nec nisi tellus. Duis condimentum est quis faucibus eleifend. Morbi pretium nibh.`