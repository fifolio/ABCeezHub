import { Query } from "appwrite";
import { database } from "@/backend/configs/config";

// This function retrieves all projects from the database
export async function GET_allProjects() {

    try {
        const res = await database.listDocuments(
            import.meta.env.VITE_BACKEND_MAIN_DATABASE,
            import.meta.env.VITE_BACKEND_PORTFOLIO_COLL,
            [Query.orderDesc('$createdAt')]
        );
        return res.documents;
    } catch (err) {
        console.error("Error in GET_allProjects:", err);
        return [];
    }
}
