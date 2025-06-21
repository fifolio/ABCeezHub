import { database } from "@/backend/configs/config";

// This function retrieves the article from the database
export async function GET_Article(articleID: string) {
    const results = await database.getDocument(
        `${import.meta.env.VITE_BACKEND_MAIN_DATABASE}`,
        `${import.meta.env.VITE_BACKEND_ARTICLES_COLL}`,
        `${articleID}`
    ).then((res) => {
        return res
    }).catch((err) => {
        return err
    })

    return results
}