

export default class Project {

    id;
    title;
    about;
    owner;

    colaborators;
    tracks;

    constructor(id, title, about, owner) {
        this.id = id;
        this.title = title;
        this.about = about;
        this.owner = owner;

        this.colaborators = [];
        this.tracks = [];
    }

}