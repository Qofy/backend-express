import express from 'express';
import { addToWatchList, removeFromWatchlist, updateWatchlistItem} from '../controllers/watchListController.js';
import { authMiddleware } from '../middleWare/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware)
router.post('/', addToWatchList)
router.delete('/:id', removeFromWatchlist)
router.put('/', updateWatchlistItem)





export default router