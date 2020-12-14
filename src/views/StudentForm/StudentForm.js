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

export default function StudentForm(props) {
    const classes = useStyles();

    const { match } = props;
    console.log(match);

    const [id, setID] = useState("");
    const [cpf, setCPF] = useState("");
    const [matricula, setMatricula] = useState("");
    const [nome, setNome] = useState("");
    const [idEnd, setIDEnd] = useState("");
    const [curso, setCurso] = useState("");

    function handleSubmit(){

        const student = {
            id: id,
            cpf: cpf,
            matricula: matricula,
            nome: nome,
            idEndereco: idEnd,
            curso: curso
        }

        console.log(student);

        axios.post("http://localhost:8080/TemplateWS/rest/ws/cadastraAluno", student)
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }

    /*useEffect(() => {
        const getData = async () => {
            const response = await axios.get("http://localhost:8080/TemplateWS/rest/ws/alunos/JSON")
            .then(res => console.log(res))
            .catch(error => console.log(error));
        }
    }, []); */

    useEffect(() => {
        axios
            .get("http://localhost:8080/TemplateWS/rest/ws/alunos/JSON")
            .then((response) => {
                console.log(response);
                // setStudents(response.data);
            });
    }, []);

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="danger">
                            <h4 className={classes.cardTitleWhite}>Student</h4>
                            <p className={classes.cardCategoryWhite}>
                                Complete the student information
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
                                        labelText="cpf"
                                        id="cpf"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: cpf,
                                            onChange: (event) =>
                                                setCPF(event.target.value),
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
                                                setIDEnd(event.target.value),
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
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
