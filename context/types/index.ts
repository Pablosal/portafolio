
export const actions = {
    animationActions: {
        TOGGLE_ANIMATIONS: "TOGGLE_ANIMATIONS"
    }
}

export type Article = {
    article_name: string;
    article_link: string;
    article_image: string;
    created_at: string;
    id: string;
};
export type project = {
    proyect_name: string;
    proyect_description: string;
    proyect_technologies_description: string;
    proyect_link: string;
    proyect_image: string;
    proyect_technologies: string;
    created_at: string;
    id: string;
};