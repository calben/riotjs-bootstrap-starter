import './css/vanilla/bootstrap.css';
import './css/index.css'
import './js/bootstrap.js'
import './event-helper';

// Put RiotControl first in the startup flow
import RiotControl from 'riotcontrol';
riot.control = RiotControl;

// Add the stores

import ItemStore 	from './stores/itemstore.js';
riot.control.addStore(new ItemStore());


// put Router Last
import Router 		from './router.js';
riot.router = new Router();





