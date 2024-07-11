import { Category } from "./category";
export type Task = {
    id: number;
    name: string;
    limit?: Date;
    description: string;
    category: Category;
};