const cols = 'abcdefgh';

const white = 'PBNRQK';

const black = 'pbnrqk';

const defaultSize = 480;

const defaultPadding = [0, 0, 0, 0];

const defaultLight = 'rgb(240, 217, 181)';

const defaultDark = 'rgb(181, 136, 99)';

const defaultHighlight = 'rgba(235, 97, 80, 0.8)';

const defaultStyle = 'merida';

const defaultNotationSize = 15;

const filePaths = {
  wp: 'WhitePawn',
  bp: 'BlackPawn',
  wb: 'WhiteBishop',
  bb: 'BlackBishop',
  wn: 'WhiteKnight',
  bn: 'BlackKnight',
  wr: 'WhiteRook',
  br: 'BlackRook',
  wq: 'WhiteQueen',
  bq: 'BlackQueen',
  wk: 'WhiteKing',
  bk: 'BlackKing',
};

module.exports = {
  cols,
  white,
  black,
  defaultSize,
  defaultPadding,
  defaultLight,
  defaultDark,
  defaultHighlight,
  defaultStyle,
  defaultNotationSize,
  filePaths,
};
