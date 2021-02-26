export const GameLevel = Object.freeze({
  EASY: {
    name: "EASY",
    rows: 8,
    columns: 8,
    num_mine: 10,
  },
  INTERMEDIATE: {
    name: "INTERMEDIATE",
    rows: 20,
    columns: 20,
    num_mine: 50,
  },

  EXPERT: {
    name: "EXPERT",
    rows: 32,
    columns: 32,
    num_mine: 150,
  },
});

export const GameInitialState = {
  board: [],
  level: GameLevel.EASY,
  gameOver: false,
  minesLeft: GameLevel.EASY.num_mine,
  gameClear: false,
  clickNumber: 0,
};

export const InjectMineEnum = Object.freeze({
    DO_NOT_INJECT: 0,
    INJECT: 1
});