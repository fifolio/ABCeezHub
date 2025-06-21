import { Query } from "appwrite";
import { database } from "@/backend/configs/config";

// This function retrieves all articles from the database
export async function GET_featuredArticle() {

    try {
        const res = await database.listDocuments(
            import.meta.env.VITE_BACKEND_MAIN_DATABASE,
            import.meta.env.VITE_BACKEND_ARTICLES_COLL,
            [Query.equal('featured', true)]
        );
        return res.documents[0];
    } catch (err) {
        console.error("Error in GET_featuredArticle:", err);
        return [];
    }
}
