/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import DashboardPage from "views/Dashboard/Dashboard.js";
import ProjectForm from "views/ProjectForm/ProjectForm.js";
import ProjetctList from "views/ProjectList/ProjectList.js";
import StudentForm from "views/StudentForm/StudentForm.js";
import TeacherForm from "views/TeacherForm/TeacherForm.js";
import TableList from "views/TableList/TableList.js";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: Dashboard,
        component: DashboardPage,
        layout: "/admin",
    },
    {
        path: "/project",
        name: "Projeto",
        icon: BusinessCenter,
        component: ProjectForm,
        layout: "/admin",
    },
    {
        path: "/list-project",
        name: "Project List",
        icon: "content_paste",
        component: ProjetctList,
        layout: "/admin",
    },
    {
        path: "/teacher",
        name: "New Teacher",
        icon: Person,
        component: TeacherForm,
        layout: "/admin",
    },
    {
        path: "/student",
        name: "New Student",
        icon: Person,
        component: StudentForm,
        layout: "/admin",
    },
    {
        path: "/table",
        name: "Table List",
        icon: "content_paste",
        component: TableList,
        layout: "/admin",
    },
];

export default dashboardRoutes;
