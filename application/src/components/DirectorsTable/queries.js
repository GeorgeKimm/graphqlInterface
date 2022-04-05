import { gql } from "apollo-boost";
// directorsQuery(строка 5) это название константы, ее как раз экспортируют
// что означает directorsQuery(строка 6) я не знаю, вероятно это имя данного запроса, но где оно применяется я хз
// directors - это название одного из запросов с файла schema.js(он лежит на сервере)
export const directorsQuery = gql`
  query directorsQuery($name: String) {
    directors(name: $name) {
      id
      name
      age
      movies {
        name
        id
      }
    }
  }
`;

// в этом и подобных файлах, я пишу запросы к базе данных
// после написания запроса его необходимо дернуть в файле hoc
