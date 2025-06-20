import { database } from "@/backend/configs/config";

// This function retrieves the featured article from the database
export async function GET_featuredArticle() {
    const results = await database.listDocuments(
        `${import.meta.env.VITE_BACKEND_MAIN_DATABASE}`,
        `${import.meta.env.VITE_BACKEND_FEATURED_ARTICLE_COLL}`
    ).then((res) => {
        return res.documents[0]
    }).catch((err) => {
        return err
    })

    return results
}