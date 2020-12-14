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

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios
            //.get("http://localhost:8080/projetos")
            .get("http://localhost:8080/TemplateWS/rest/ws/projetos/JSON")
            .then((response) => {
                const data = [];

                response.data.lista.forEach((element) => {
                    const elementToTable = [
                        (element.id || "").toString(),
                        (element.tituloProjeto || "").toString(),
                        (element.areaProjeto || "").toString(),
                        (element.resumo || "").toString(),
                        (element.palavraChave1 || "").toString(),
                        (element.palavraChave2 || "").toString(),
                        (element.palavraChave3 || "").toString(),
                        (element.url || "").toString(),
                        (element.idProfessorResponsavel || "").toString(),
                        (element.idAlunoParticipante || "").toString(),
                    ];

                    data.push(elementToTable);
                });

                setProjects(data);
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
                                "Titulo",
                                "Area",
                                "Resumo",
                                "Palavra-Chave 1",
                                "Palavra-Chave 2",
                                "Palavra-Chave 3",
                                "URL",
                                "ID Professor",
                                "ID Aluno",
                            ]}
                            tableData={projects}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}
