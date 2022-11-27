export default class VehiclePicture {
    constructor(pictureURL) {
        const url = pictureURL ? new URL(pictureURL) : null;

        if (!url) {
            this.pictureURL = '#';
        }

        this.url = `${url.origin}/${url.pathname}?auto=format`;
    }

    resized(w, h) {
        if (w) {
            this.url += `&w=${w}`;
        }

        if (h) {
            this.url += `&h=${h}`;
        }

        return this;
    }
}