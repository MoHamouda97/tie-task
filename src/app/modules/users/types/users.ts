export type User = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
    skils: {title: string, badge: string}[],
    departmentId: number,
    department: string
}