import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Word, WordDefinition } from './redux/States';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardActions } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  card: {
    marginBottom: 8,
  },
  pron: {
    marginBottom: 12,
  },
});

export function App() {
  const [wordList, setWordList] = React.useState([] as Word[]);


  // const vocabulary = useSelector((state: State) => state.vocabulary);
  // const dispatch = useDispatch();

  const wordListSaved = () => {
    const data = sessionStorage.getItem('wordList') as string;
    const wordList: Word[] = data ? JSON.parse(data) : [];

    setWordList(wordList);
    // dispatch(queryWord(wordList)); 
  };

  const classes = useStyles();



  const wordListEles = wordList.map(e =>
    <Card className={classes.card} key={e.word}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {e.word}
        </Typography>
        <Typography className={classes.pron} color="textSecondary">
          {e.pron}
        </Typography>
        {e.defs.map(d => (
          <Typography className={classes.pron} color="textSecondary" key={d.def}>
            {d.def}
          </Typography>
        ))}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card >
  );

  return (
    <Container maxWidth="sm">
      UP UP your vocabulary
      <button id="wordListSaved" onClick={wordListSaved}></button>
      {wordListEles}
      {/*   <input onInput={search}
        ref={(input) => { if (input) inputRef = input }} />
      <ul>
        {vocabulary.map(e => <li key={e}>{e}</li>)}
      </ul>
      <hr />
      <iframe src={cambridgeFQDN + input}
        onLoad={iframOnLoad} /> */}
    </Container>
  );
};

