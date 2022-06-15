import {
    navigateTo,
    registerRoute,
    app
} from 'https://raw.githubusercontent.com/GreenAntDev/jsphere-etc/main/client/lib/jsphere.js';

// REGISTER APPLICATION ROUTES
// registerRoute('/', viewTicTacToe);
// navigateTo();

// ROUTE HANDLERS
// async function viewTicTacToe(params) {
    const view = await import('./tictactoe.js');
    view.init(app);
// }
