export class ReplaceImg {
  constructor(img) {
    this.img = img;
    this.imagesArr = [
      ["svg", "dream-world"],
      ["png", "official-artwork"],
    ];
  }

  replaceSVG() {
    this.img.src = this.img.src
      .replace(this.imagesArr[0][0], this.imagesArr[1][0])
      .replace(this.imagesArr[0][1], this.imagesArr[1][1]);

    return this.img;
  }

  replacePNG() {
    this.img.src = this.img.src
      .replace(this.imagesArr[1][0], this.imagesArr[0][0])
      .replace(this.imagesArr[1][1], this.imagesArr[0][1]);
    return this.img;
  }
}
