import express from 'express';
import { addToWatchList, removeFromWatchlist, updateWatchlistItem} from '../controllers/watchListController.js';
import { authMiddleware } from '../middleWare/authMiddleware.js';
import { validateRequest } from '../middleWare/validateRequest.js';
import { addToWatchlistSchema } from '../validation/watchListValidator.js';

const router = express.Router();

router.use(authMiddleware)

router.post('/', validateRequest(addToWatchlistSchema),addToWatchList)
router.delete('/:id', removeFromWatchlist)
router.put('/', updateWatchlistItem)





export default router