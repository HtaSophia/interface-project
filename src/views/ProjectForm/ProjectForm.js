import React, { useEffect, useState } from "react";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

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

    const { match } = props;
    console.log(match);

    const [teachers, setTeachers] = useState([
        { id: "test", value: "10", label: "Test" },
    ]);

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
                console.log(response);
                // setTeachers(response.data);
            });
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:8080/TemplateWS/rest/ws/alunos/JSON")
            .then((response) => {
                console.log(response);
                // setStudents(response.data);
            });
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
            idProfessorResponsavel: teacher,
            idAlunoParticipante: student,
        };

        axios
            .post(
                "http://localhost:8080/TemplateWS/rest/ws/cadastraProjeto",
                project
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
                            <h4 className={classes.cardTitleWhite}>Project</h4>
                            <p className={classes.cardCategoryWhite}>
                                Complete the project information
                            </p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Title"
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
                                        labelText="Keyword #1"
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
                                        labelText="Keyword #2"
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
                                        labelText="Keyword #3"
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
                                        labelText="Resume"
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
                            <Button
                                color="danger"
                                buttonProps={{
                                    handleClick: handleSubmit,
                                }}
                            >
                                Cancel
                            </Button>
                            <Button color="success">Save</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
