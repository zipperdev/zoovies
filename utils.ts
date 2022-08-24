export const makeImagePath = (image: string, width: string = "w500"): string => 
    `https://image.tmdb.org/t/p/${width}${image}`;