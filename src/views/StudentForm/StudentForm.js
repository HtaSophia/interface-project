import React from "react";
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

export default function StudentForm() {
    const classes = useStyles();

    const { useState } = React;

    const [data, setData] = useState({
        id: '',
        cpf: '',
        matricula: '',
        nome: '',
        endereco: '',
        curso: '',
    });

    async function handleCreate(event){

        const user = {
            id: event.id,
            cpf: event.cpf,
            matricula: event.matricula,
            nome: event.nome,
            idEndereco: event.idEndereco,
            curso: event.curso
        }

        await axios.post("http://localhost:8080/TemplateWS/rest/ws/cadastraAluno", user)
            .then(resposta => console.log(resposta))
            .catch(error => console.log(error));
    }

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
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="matricula"
                                        id="matricula"
                                        formControlProps={{
                                            fullWidth: true,
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
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="idEndereco"
                                        id="idEndereco"
                                        formControlProps={{
                                            fullWidth: true,
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
                                            multiline: true,
                                            rows: 5,
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="danger">Cancel</Button>
                            <Button color="success" onClick={() => handleCreate({id: document.getElementById('id').value,
                                cpf: document.getElementById('cpf').value,
                                matricula: document.getElementById('matricula').value,
                                nome: document.getElementById('nome').value,
                                idEndereco: document.getElementById('idEndereco').value,
                                curso: document.getElementById('curso').value
                                })}>Save</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
