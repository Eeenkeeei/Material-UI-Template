import {Main} from "./Main";
import {Page1} from "./Page1";
import {Page2} from "./Page2";

export interface Link {
    path: string
    label: string
    component: () => JSX.Element
}

export const Links: Link[] = [
    {path: '/', label: 'Главная', component: Main},
    {path: '/page1', label: 'Page1', component: Page1},
    {path: '/page2', label: 'Page2', component: Page2}
];

