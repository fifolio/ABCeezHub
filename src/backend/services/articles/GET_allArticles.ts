import { Query } from "appwrite";
import { database } from "@/backend/configs/config";

// This function retrieves all articles from the database
export async function GET_allArticles(sortBy?: string, searchTerm?: string) {

    // Determine the sort order
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

    // Build the query list
    const queries = [order, Query.contains('title', `${searchTerm}`)];

    if (searchTerm && searchTerm.trim() !== '') {
        queries.push(Query.contains('title', searchTerm.trim()));
    }

    try {
        const res = await database.listDocuments(
            import.meta.env.VITE_BACKEND_MAIN_DATABASE,
            import.meta.env.VITE_BACKEND_ARTICLES_COLL,
            queries
        );
        return res.documents as unknown;
    } catch (err) {
        console.error("Error in GET_allArticles:", err);
        return [];
    }
}
