import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import axios from 'axios';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
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
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {

    const [data, setData] = useState([

    ]);

    function handleQuery(){
        axios
          .get("http://localhost:8080/TemplateWS/rest/ws/alunos/JSON")
          .then(response => {

            console.log(response.data.lista);
            const alunos = response.data.lista.map(data => {
              return {
                id: data.id,
                cpf: data.cpf,
                matricula: data.matricula,
                nome: data.nome,
                idEndereco: data.idEndereco,
                curso: data.curso
              }
            })
            setData(alunos);
          })
      }


    const classes = useStyles();
    return (
        <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Alunos</h4>
                    <p className={classes.cardCategoryWhite}>
                    Tabela de todos os alunos
                    </p>
                </CardHeader>
                <CardBody>
                    <Table
                    tableHeaderColor="primary"
                    tableHead={["ID", "Matrícula", "Nome", "CPF", "IDEndereço", "Curso"]}
                    tableData={[]}
                    />
                </CardBody>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
            <Card plain>
                <CardHeader plain color="primary">
                    <h4 className={classes.cardTitleWhite}>
                    Professores
                    </h4>
                    <p className={classes.cardCategoryWhite}>
                    Tabela de todos os professores
                    </p>
                </CardHeader>
                <CardBody>
                    <Table
                    tableHeaderColor="primary"
                    tableHead={["ID", "Matrícula", "Nome", "Curso", "IDEndereço"]}
                    tableData={[
                        [],
                    ]}
                    />
                </CardBody>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Projetos</h4>
                    <p className={classes.cardCategoryWhite}>
                    Tabela de todos os projetos
                    </p>
                </CardHeader>
                <CardBody>
                    <Table
                    tableHeaderColor="primary"
                    tableHead={["ID", "Título do Projeto", "Área do Projeto", "Resumo", "Palavra-Chave 1", "Palavra-Chave 2", "Palavra-Chave 3", "Url", "ID do Professor Responsável", "ID do Aluno Participante"]}
                    tableData={[
                        [],
                    ]}
                    />
                </CardBody>
            </Card>
        </GridItem>
        </GridContainer>
    );
}
