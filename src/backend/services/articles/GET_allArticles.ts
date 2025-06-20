import { database } from "@/backend/configs/config";

// This function retrieves all articles from the database
export async function GET_allArticles() {
    const results = await database.listDocuments(
        `${import.meta.env.VITE_BACKEND_MAIN_DATABASE}`,
        `${import.meta.env.VITE_BACKEND_ARTICLES_COLL}`
    ).then((res) => {
        return res.documents
    }).catch((err) => {
        return err
    })

    return results
}