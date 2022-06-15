export async function init(component, params) {

    await component.load('/demo/client/tictactoe.html');

    component.init((view) => {
        // Init view state
        view.state.board = Array(9).fill(0);
        view.state.plays = [Array(9).fill(0)];
        view.state.play = 0;
        view.state.player = 'X';
        view.state.winner = null;

        // Init the gameboard
        for (let i=0; i < 9; i++) {
            view['square' + i].value = '';
            view['square' + i].onclick = () => {  play(view, i) };
        }

        // Init game status
        view.status.value = `Next player: ${view.state.player}`;

        // Init the 'go to move' buttons
        let move = view.moves.add(`moveStart`);
        move.replay.style = 'button.primary';
        move.replay.text = `Go to game start`;
        move.replay.onclick = () => { showPlay(view, 0) };

        for (let i = 1; i <= 9; i++) {
            move = view.moves.add(`move${i}`);
            move.replay.style = 'button.primary';
            move.replay.text = `Go to move #${i}`;
            move.replay.onclick = () => { showPlay(view, i) };
            move.visible = false;
        }
    });
}

function updateView(view) {
    // Update game board
    const map = ['', 'X', 'O'];
    for (let i = 0; i < view.state.board.length; i++) {
        view['square' + i].value = map[view.state.board[i]];
    }

    // Update game status
    if (view.state.winner === null) {
        view.status.value = `Next player: ${view.state.player}`;
    }
    else if (view.state.winner === '-') {
        view.status.value = `Draw`;
    }
    else {
        view.status.value = `Winner: ${view.state.winner}`;
    }

    // Update game play history
    for (let i = 1; i <= 9; i++) {
        const move = view.moves[`move${i}`];
        move.visible = (i < view.state.plays.length) ? true : false
    }
}

function play(view, square) {
    if (view.state.board[square] !== 0) return;

    view.state.play++;
    view.state.board[square] = view.state.player == 'X' ? 1 : 2;
    view.state.plays[view.state.play] = [...view.state.board];
    view.state.plays.splice(view.state.play + 1);
    view.state.winner =  null;

    if (isWinner(view)) {
        view.state.winner = view.state.player;
    }
    else if (view.state.plays.length === 10) {
        view.state.winner = '-';
    }
    else {
        view.state.player = (view.state.player === 'X') ? 'O' : 'X';
    }

    updateView(view);
}

function showPlay(view, play) {
    view.state.board = [...view.state.plays[play]];
    view.state.play = play;
    view.state.player = (play % 2 === 0) ? 'X' : 'O';
    updateView(view, view.state);
}

function isWinner(view) {
    const board = view.state.board;
    if ([1, 8].includes(board[0] * board[1] * board[2])) return true;
    if ([1, 8].includes(board[3] * board[4] * board[5])) return true;
    if ([1, 8].includes(board[6] * board[7] * board[8])) return true;
    if ([1, 8].includes(board[0] * board[3] * board[6])) return true;
    if ([1, 8].includes(board[1] * board[4] * board[7])) return true;
    if ([1, 8].includes(board[2] * board[5] * board[8])) return true;
    if ([1, 8].includes(board[0] * board[4] * board[8])) return true;
    if ([1, 8].includes(board[2] * board[4] * board[6])) return true;
    return false;
}
