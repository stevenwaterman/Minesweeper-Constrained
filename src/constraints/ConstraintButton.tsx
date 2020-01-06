import React from "react";
import "./Styles.scss";

type Props = {
  enabled: boolean;
  text: string;
  action?: () => void;
};

const Component: React.FC<Props> = ({ enabled, text, action }) => {
  if (enabled) {
    return (
      <button onClick={action} className="constraintButton enabled">
        {text}
      </button>
    );
  } else {
    return <button className="constraintButton">{text}</button>;
  }
};

export default Component;
