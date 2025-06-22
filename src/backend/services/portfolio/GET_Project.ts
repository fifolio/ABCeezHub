import { database } from "@/backend/configs/config";

// This function retrieves the project from the database
export async function GET_Project(projectID: string) {
    const results = await database.getDocument(
        `${import.meta.env.VITE_BACKEND_MAIN_DATABASE}`,
        `${import.meta.env.VITE_BACKEND_PORTFOLIO_COLL}`,
        `${projectID}`
    ).then((res) => {
        return res
    }).catch((err) => {
        return err
    })

    return results
}