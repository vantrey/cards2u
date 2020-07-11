import { repository } from "../repos_localStorage/Token";


export const FindFreeDeck = (userId) => {

	const userFavoriteDecksFromLS = repository.get_UserFavoriteDecksFromLS(userId);
	const emptySlots = userFavoriteDecksFromLS.favoriteDecks.filter(fDecks => {
		return fDecks.deckName === '';
	});

	const freeSlot = emptySlots[0];

	if(freeSlot) {
		const  freeFavoriteSlotID = freeSlot.favoriteDeckId;
		return freeFavoriteSlotID;
	} else {
		return false;
	}
};
