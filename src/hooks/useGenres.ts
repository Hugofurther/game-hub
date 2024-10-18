import genres from "../data/genres";
// import useData from "./useData";

export interface Genre {
id: number;
name: string;
image_background: string;
}

// export const useGenres = () => useData<Genre>("/genres");
export const useGenres = () => ({ data: genres, error: null, isLoading: false });


export default useGenres;