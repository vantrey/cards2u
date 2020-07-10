import { repository } from "../repos_localStorage/Token";


export const FindFreeDeck = (userId) => {

	const userFavoriteDecksFromLS = repository.get_UserFavoriteDecksFromLS(userId);
	const emptySlots = userFavoriteDecksFromLS.favoriteDecks.filter(fDecks => {
		return fDecks.deckName === '';
	});

	const freeSlot = emptySlots[0];
	const freeFavoriteSlotID = freeSlot.favoriteDeckId;

	if(freeSlot) {
		return freeFavoriteSlotID;
	} else {
		return null
	}

};

// const freeSlotID = FindFreeDeck('5ee7342f8c6c320004bab925');
// console.log ('freeSlotID', freeSlotID)

