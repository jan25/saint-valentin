# Saint Valentin

Apparently Saint Valentine is associated with tradition of courtly love and modern Valentines day. This repository is a GPT-2 version of him that tries to generate letters based on a predefined starting words.

Most of letters generated in this app are gibberish as training set is tiny. In practise, GPT-2 model is trained on tons of text, millions of features and text generation is done online. This project can serve as a learning example.

## Train and generate

Find ipython notebook at [gpt-2/collab](gpt-2/collab_generation.ipynb).
It is based on [minimaxir/gpt-2-simple](https://github.com/minimaxir/gpt-2-simple#gpt-2-simple).

Generate data and copy to collab using:
```bash
python3 gpt-2/generate_training_data.py
```

Training data is inspired by [kaggle dataset](https://www.kaggle.com/fillerink/love-letters).

## React app

S single screen app to view the generated letters with chosen starting words. Checkout `app` folder. View generated letters at 
TODO: Add link to deployment