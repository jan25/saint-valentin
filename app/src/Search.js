import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import generatedLetters from './generated_letters.json';

const searchLength = 100;

let prefixes = []
for (let l of generatedLetters) {
  const [prefix] = Object.keys(l);
  prefixes.push(prefix);
}

// TODO: Make this optional. Type a random letter on each refresh.
export default function Search() {
  return (
    <Autocomplete
      id="search-box"
      style={{ margin: "auto", marginTop: "2%" }}
      size="small"
      fullWidth={true}
      options={prefixes}
      blurOnSelect={true}
      autoComplete={true}
      freeSolo
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField {...params} label="Pick starting words..." variant="outlined" margin="normal" />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option, inputValue);
        const parts = parse(option, matches);

        return (
          <div>
            {parts.map((part, index) => (
              <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                {part.text}
              </span>
            ))}
          </div>
        );
      }}
    />
  );
}
