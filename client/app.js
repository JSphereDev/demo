import {
    navigateTo,
    registerRoute,
    app
} from '/etc/client/lib/jsphere.js';

// REGISTER APPLICATION ROUTES
// registerRoute('/', viewTicTacToe);
// navigateTo();

// ROUTE HANDLERS
// async function viewTicTacToe(params) {
    const view = await import('./tictactoe.js');
    view.init(app);
// }
