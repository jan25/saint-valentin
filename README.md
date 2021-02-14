# Saint Valentin

Apparently Saint Valentine is associated with tradition of courtly love and modern Valentines day. This repository is a GPT-2 version of him that tries to generate letters based on a predefined starting sentences.

## Use Collab workspace to train and generate letters

Find ipython notebook at [gpt-2/collab](gpt-2/collab_generation.ipynb).

It is based on [minimaxir/gpt-2-simple](https://github.com/minimaxir/gpt-2-simple#gpt-2-simple).

### Generate training data and prefixes for generation

Generate data and copy to collab.

```bash
python3 gpt-2/extract_prefixes.py
```

### Publicly available dataset used in training

Training data is inspired by [kaggle dataset](https://www.kaggle.com/fillerink/love-letters).

## React app to view generated letters

Checkout `app` folder.

TODO: Add link to deployment