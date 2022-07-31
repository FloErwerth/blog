import PictureFlorian from "./Foto_Florian.jpg";

type Pictures = "PictureFlorian";

export function getPicture(picture: Pictures): string {
  switch (picture) {
    case "PictureFlorian": return  PictureFlorian;
  }
}