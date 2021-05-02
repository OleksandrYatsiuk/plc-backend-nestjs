export interface Certificates {
    readonly _id: string;
    userId: string;
    courseId: string;
    fileId: string;
    fileLink: string;
    createdAt: number;
    updatedAt: number;
}

export enum EStudyProgress {
    NOT_STARTED = 0,
    STARTED = 1,
    IN_PROGRESS = 2,
    COMPLETED = 3
}