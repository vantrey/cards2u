import React, {useState} from 'react';



const displayItem = (currentPage: number, maxPerPage: number, index:number): boolean => {

    const currentPageStart = ((currentPage - 1) * maxPerPage) + 1;
    const currentPageEnd = currentPage * maxPerPage;

    if ((index + 1) >= currentPageStart && (index + 1) <= currentPageEnd ) {
        return true;
    }

    return false;
}

export const usePagination = (itemList: any[], maxItemsPerPage: number = 10) => {

    const [items, setItems] = React.useState(itemList);
    const [currentPage, setCurrentPage] = React.useState(1);

    const isPaginating = items.length > maxItemsPerPage;
    const totalPages = Math.ceil(items.length / maxItemsPerPage);

    const pageItems: any[] = items.filter((val, index) => {

        if (!isPaginating) {
            return true;
        }

        if (!displayItem(currentPage, maxItemsPerPage, index)) {
            return false;
        }

        return true;
    });

    const setItemList = (items: any[]) => {
        setCurrentPage(1);
        setItems(items);
    }

    return {
        setItemList,
        isPaginating,
        currentPage,
        setCurrentPage,
        pageItems,
        totalPages
    };
}

export default usePagination;