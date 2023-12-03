import { User } from "../types/users";

export const USERS: User[] = [
    {
        id: 1,
        email: 'JULES_00@DOMAIN.TLD',
        first_name: 'Jules',
        last_name: 'Blanchard',
        skils: [{title: 'UI/UX', badge: 'bg-success'}],
        avatar: 'https://reqres.in/img/faces/7-image.jpg',
        departmentId: 1,
        department: 'Marketing'
    },
    {
        id: 2,
        email: 'YASMINE90@DOMAIN.TLD',
        first_name: 'Yasmine',
        last_name: 'Bertin',
        skils: [{title: 'Soft Skils', badge: 'bg-primary'}],
        avatar: 'https://reqres.in/img/faces/8-image.jpg',
        departmentId: 2,
        department: 'Sales'
    },
    {
        id: 3,
        email: 'SINA.ILSNER@DOMAIN.TLD',
        first_name: 'Sina',
        last_name: 'Ilsner',
        skils: [{title: 'Angular', badge: 'bg-danger'}, {title: 'JS', badge: 'bg-info'}],
        avatar: 'https://reqres.in/img/faces/9-image.jpg',
        departmentId: 3,
        department: 'Development'
    },
    {
        id: 4,
        email: 'JUSTINMUNOZ@DOMAIN.TLD',
        first_name: 'Justin',
        last_name: 'Munoz',
        skils: [{title: 'AR', badge: 'bg-dark'}],
        avatar: 'https://reqres.in/img/faces/10-image.jpg',
        departmentId: 4,
        department: 'Accounting'
    },
    {
        id: 5,
        email: 'JUANBANKS@DOMAIN.TLD',
        first_name: 'Juan',
        last_name: 'Banks',
        skils: [{title: 'Communication', badge: 'bg-warning'}],
        avatar: 'https://reqres.in/img/faces/11-image.jpg',
        departmentId: 2,
        department: 'Sales'
    },
];