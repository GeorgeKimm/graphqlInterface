import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { graphql } from "react-apollo";

import { addDirectorMutation, updatedDirectorMutation } from "./mutations";
import { directorsQuery } from "../DirectorsTable/queries";

import { styles } from "./styles";

// создание обертки
const withGraphQL = compose(
  // здесь у graphql два аргумента
  // в первом указывается мутация
  // во втором передается объект в котором описываются пропсы, которые пойдут в сам компонент
  // в данном случае это пропс addDirector, который будет принимать объект режиссера
  // и передавать его свойства в виде аргументов в мутацию (поля name и age)
  graphql(addDirectorMutation, {
    props: ({ mutate }) => ({
      addDirector: (director) =>
        mutate({
          variables: director,
          // благодаря refetchQueries при вызыве мутаций, дополнительно срабатывает запрос на получение обновленных данных
          // refetchQueries принимает массив объектов
          refetchQueries: [
            {
              query: directorsQuery,
              variables: { name: "" },
            },
          ],
        }),
    }),
  }),
  graphql(updatedDirectorMutation, {
    props: ({ mutate }) => ({
      updateDirector: (director) =>
        mutate({
          variables: director,
          refetchQueries: [
            {
              query: directorsQuery,
              variables: { name: "" },
            },
          ],
        }),
    }),
  })
);

export default compose(
  withStyles(styles),
  withGraphQL
);
