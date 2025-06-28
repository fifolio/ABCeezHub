import { database, ID } from "@/backend/configs/configs";

type AdminsCreateArticleTypes = {
    userId: string;
    title: string;
    content: string;
    author: string;
    coverURL: string;
    hook: string;
    readingTime: string;
    category: string;
    featured: boolean;
}

export async function adminsCreateArticle(payload: AdminsCreateArticleTypes) {

    const documentData = {
        userId: payload.userId,
        title: payload.title,
        content: payload.content,
        author: payload.author,
        coverURL: payload.coverURL,
        hook: payload.hook,
        readingTime: payload.readingTime,
        category: payload.category,
        featured: payload.featured
    };

    const res = await database.createDocument(
        `${import.meta.env.VITE_BACKEND_MAIN_DATABASE}`,
        `${import.meta.env.VITE_BACKEND_ARTICLES_COLL}`,
        ID.unique(),
        documentData
    ).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
    return res
}