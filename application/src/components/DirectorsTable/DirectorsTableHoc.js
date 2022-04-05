import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { graphql } from "react-apollo";

import { directorsQuery } from "./queries";

import { styles } from "./styles";

const withGraphQL = graphql(directorsQuery, {
  // прописываем аргумент к запросу
  options: ({ name = "" }) => ({
    variables: { name },
  }),
});

// в этом и подобных файлах, я оборачиваю компонент в различные хоки
// mui предоставляет hoc withstyles, который берет стили из файла styles
// и пробрасывает их в компонент в виде пропсов
// это легко проверить, открыв компонент и найдя пропс classes

// также как можно заметить сам withstyles пробрасывается через compose
// compose дает возможность один компонент обернуть в несколько hoc

export default compose(
  withStyles(styles),
  withGraphQL
);
