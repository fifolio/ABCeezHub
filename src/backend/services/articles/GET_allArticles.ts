import { database } from "@/backend/configs/config";
import { Query } from "appwrite";

// This function retrieves all articles from the database
export async function GET_allArticles(sortBy?: string) {

    // Check upon the type of orders from the list below that equals to that got received
    let order;
    switch (sortBy) {
        case 'newest':
            order = Query.orderDesc('$createdAt');
            break;
        case 'oldest':
            order = Query.orderAsc('$createdAt');
            break;
        default:
            order = Query.orderDesc('$createdAt');
            break;
    }

    const queries = [
        order
    ];

    const results = await database.listDocuments(
        `${import.meta.env.VITE_BACKEND_MAIN_DATABASE}`,
        `${import.meta.env.VITE_BACKEND_ARTICLES_COLL}`,
        queries
    ).then((res) => {
        return res.documents
    }).catch((err) => {
        return err
    })

    return results
}