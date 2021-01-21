import Rif from "./Rif";
import Relif from "./Relif";
import Relse from "./Relse";

const ReactIfElse = (props) => {
  const childs = props.children;

  const checkOrder = props.children.reduce((okay, current, index, array) => {
    return (
      okay &&
      ((current.type.name === "Rif" && index === 0) ||
        (current.type.name === "Relif" &&
          array[index - 1].type.name === "Rif") ||
        (current.type.name === "Relse" &&
          array[index - 1].type.name === "Rif") ||
        (current.type.name === "Relse" &&
          array[index - 1].type.name === "Relif"))
    );
  }, true);

  if (checkOrder) {
    return childs.filter(
      (child) => child.props.expr || child.type.name === "Relse"
    )[0];
  } else {
    return (
      <div style={{ color: "red" }}>
        Plese check (Rif, Relif, Relse)'s order
      </div>
    );
  }
};

export { ReactIfElse, Rif, Relif, Relse };
