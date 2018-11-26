export interface User {
    id: number
    username: string
    
}

export interface Project {
    id: number
    title: string
    owner: string

    colaborators: array
    tracks: array
}

export interface Track {
    id: number
    name: string
}