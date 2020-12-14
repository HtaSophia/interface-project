import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import axios from "axios";

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0",
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
    },
};

const useStyles = makeStyles(styles);

export default function TeacherForm(props) {
    const classes = useStyles();

    const { match } = props;
    console.log(match);

    const [id, setID] = useState("");
    const [matricula, setMatricula] = useState("");
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [idEnd, setIdEnd] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8080/TemplateWS/rest/ws/professores/JSON")
            .then((response) => {
                console.log(response);
            });
    }, []);

    function handleSubmit() {
        const teacher = {
            id: id,
            matricula: matricula,
            nome: nome,
            curso: curso,
            idEnderedo: idEnd
        };

        axios
            .post(
                "http://localhost:8080/TemplateWS/rest/ws/cadastraProfessor",
                teacher
            )
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
    }

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="danger">
                            <h4 className={classes.cardTitleWhite}>Teacher</h4>
                            <p className={classes.cardCategoryWhite}>
                                Complete the Teacher information
                            </p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="id"
                                        id="id"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: id,
                                            onChange: (event) =>
                                                setID(event.target.value),
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="matricula"
                                        id="matricula"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: matricula,
                                            onChange: (event) =>
                                                setMatricula(event.target.value),
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="nome"
                                        id="nome"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: nome,
                                            onChange: (event) =>
                                                setNome(event.target.value),
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="curso"
                                        id="curso"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: curso,
                                            onChange: (event) =>
                                                setCurso(event.target.value),
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="idEndereco"
                                        id="idEndereco"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: idEnd,
                                            onChange: (event) =>
                                                setIdEnd(event.target.value),
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="danger">Cancel</Button>
                            <Button color="success" onClick={handleSubmit}>Save</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
