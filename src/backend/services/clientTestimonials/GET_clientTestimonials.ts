import { Query } from "appwrite";
import { database } from "@/backend/configs/config";

// This function retrieves all client testimonials from the database
export async function GET_clientTestimonials() {

    try {
        const res = await database.listDocuments(
            import.meta.env.VITE_BACKEND_MAIN_DATABASE,
            import.meta.env.VITE_BACKEND_CLIENTES_TESTIMONIALS_COLL,
            [Query.orderDesc('$createdAt'), Query.limit(5)]
        );
        return res.documents;
    } catch (err) {
        console.error("Error in GET_clientTestimonials:", err);
        return [];
    }
}
