import React, { useEffect, useState } from "react";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/Select.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

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

export default function ProjectForm(props) {
    const classes = useStyles();
    const history = useHistory();

    const { location } = props;

    const [teachers, setTeachers] = useState([]);

    const [students, setStudents] = useState([]);

    const [title, setTitle] = useState("");
    const [area, setArea] = useState("");
    const [resume, setResume] = useState("");
    const [keyword1, setKeyword1] = useState("");
    const [keyword2, setKeyword2] = useState("");
    const [keyword3, setKeyword3] = useState("");
    const [url, setUrl] = useState("");
    const [teacher, setTeacher] = useState("");
    const [student, setStudent] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8080/TemplateWS/rest/ws/professores/JSON")
            .then((response) => {
                const data = response.data.lista.map((element) => ({
                    value: element.id.toString(),
                    label: element.nome,
                }));
                setTeachers(data);
            });
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:8080/TemplateWS/rest/ws/alunos/JSON")
            .then((response) => {
                const data = response.data.lista.map((element) => ({
                    value: element.id.toString(),
                    label: element.nome,
                }));
                setStudents(data);
            });
    }, []);

    useEffect(() => {
        if (location && location.query && location.query.id) {
            axios
                .get("http://localhost:8080/TemplateWS/rest/ws/projetos/JSON")
                .then((response) => {
                    const data = response.data.lista.find(
                        (element) => element.id == location.query.id
                    );

                    setTitle(data.tituloProjeto || "");
                    setArea(data.areaProjeto || "");
                    setResume(data.resumo || "");
                    setKeyword1(data.palavraChave1 || "");
                    setKeyword2(data.palavraChave2 || "");
                    setKeyword3(data.palavraChave3 || "");
                    setUrl(data.url || "");
                    setTeacher((data.idProfessorResponsavel || "").toString());
                    setStudent((data.idAlunoParticipante || "").toString());
                });
        }
    }, []);

    function handleSubmit() {
        const project = {
            tituloProjeto: title,
            areaProjeto: area,
            resumo: resume,
            palavraChave1: keyword1,
            palavraChave2: keyword2,
            palavraChave3: keyword3,
            url: url,
            idProfessorResponsavel: parseInt(teacher),
            idAlunoParticipante: parseInt(student),
        };

        if (location && location.query && location.query.id) {
            axios
                .post(
                    "http://localhost:8080/TemplateWS/rest/ws/atualizaProjeto",
                    project
                )
                .then((res) => console.log(res))
                .catch((error) => console.log(error));
        } else {
            axios
                .post(
                    "http://localhost:8080/TemplateWS/rest/ws/cadastraProjeto",
                    project
                )
                .then((res) => console.log(res))
                .catch((error) => console.log(error));
        }
    }

    function handleRemove() {
        console.log("here");
        const project = {
            tituloProjeto: title,
            areaProjeto: area,
            resumo: resume,
            palavraChave1: keyword1,
            palavraChave2: keyword2,
            palavraChave3: keyword3,
            url: url,
            idProfessorResponsavel: parseInt(teacher),
            idAlunoParticipante: parseInt(student),
        };

        axios
            .delete(
                "http://localhost:8080/removeProjeto/1",
                // "http://localhost:8080/TemplateWS/rest/ws/removeProjeto",
                project
            )
            .then((res) => console.log(res))
            .catch((error) => console.log(error));

        history.push("/admin/list-project");
    }

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="danger">
                            <h4 className={classes.cardTitleWhite}>Project</h4>
                            <p className={classes.cardCategoryWhite}>
                                Complete the project information
                            </p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Titulo"
                                        id="title"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: title,
                                            onChange: (event) =>
                                                setTitle(event.target.value),
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Area"
                                        id="area"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: area,
                                            onChange: (event) =>
                                                setArea(event.target.value),
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="Url"
                                        id="url"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: url,
                                            onChange: (event) =>
                                                setUrl(event.target.value),
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Palavra-Chave #1"
                                        id="keyword-1"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: keyword1,
                                            onChange: (event) =>
                                                setKeyword1(event.target.value),
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Palavra-Chave #2"
                                        id="keyword-2"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: keyword2,
                                            onChange: (event) =>
                                                setKeyword2(event.target.value),
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Palavra-Chave #3"
                                        id="keyword-3"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: keyword3,
                                            onChange: (event) =>
                                                setKeyword3(event.target.value),
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomSelect
                                        id="professor"
                                        label="Professor Responsável"
                                        options={teachers}
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        value={teacher}
                                        handleChange={(event) =>
                                            setTeacher(event.target.value)
                                        }
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomSelect
                                        id="aluno"
                                        label="Aluno Participante"
                                        options={students}
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        value={student}
                                        handleChange={(event) =>
                                            setStudent(event.target.value)
                                        }
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="Resumo"
                                        id="resume"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            multiline: true,
                                            rows: 5,
                                            value: resume,
                                            onChange: (event) =>
                                                setResume(event.target.value),
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            {location.query && location.query.id && (
                                <Button
                                    color="danger"
                                    buttonProps={{
                                        handleClick: handleRemove,
                                    }}
                                >
                                    Remove
                                </Button>
                            )}
                            <Button
                                color="success"
                                buttonProps={{
                                    handleClick: handleSubmit,
                                }}
                            >
                                Save
                            </Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
