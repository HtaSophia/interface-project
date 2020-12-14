import React, { useEffect, useState } from "react";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0",
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF",
        },
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1",
        },
    },
};

const useStyles = makeStyles(styles);

export default function ProjectList() {
    const classes = useStyles();

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        axios
            //.get("http://localhost:8080/projetos")
            .get("http://localhost:8080/TemplateWS/rest/ws/professores/JSON")
            .then((response) => {
                console.log(response);

                const data = [];

                response.data.lista.forEach((element) => {
                    const elementToTable = [
                        (element.id || "").toString(),
                        (element.matricula || "").toString(),
                        (element.nome || "").toString(),
                        (element.curso || "").toString(),
                        (element.idEndereco || "").toString()
                    ];

                    data.push(elementToTable);
                });
                console.log(data);
                setTeachers(data);
            });
    }, []);

    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="danger">
                        <h4 className={classes.cardTitleWhite}>Project List</h4>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="danger"
                            tableHead={[
                                "ID",
                                "Matrícula",
                                "Nome",
                                "Curso",
                                "id Endereço",
                            ]}
                            tableData={teachers}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}
