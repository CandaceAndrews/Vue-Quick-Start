const pagesKey = 'pages';

let pageJson = localStorage.get(pagesKey);
let pagesStore = JSON.parse(pages.Json);

export default {
    getAllPages() {
        return pagesStore;
    },

    getSinglePage(index) {
        return pagesStore[index];
    }
}