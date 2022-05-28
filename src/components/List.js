import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const data = [
      {
        id: 1,
        name: "LinkedIn",
        link: "http://linkedin.com",
        icon:
          "https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1653733329~hmac=cfde4f5ee5d607d1fdf381add841af01",
        bgColor: "#ff9580"
      },
      {
        id: 2,
        name: "GitHub",
        link: "https://github.com",
        icon: "https://cdn-icons-png.flaticon.com/128/733/733609.png",
        bgColor: "#f2faa6"
      },
      {
        id: 3,
        name: "Twitter",
        link: "https://twitter.com/",
        icon:
          "https://cdn-icons.flaticon.com/png/128/2504/premium/2504839.png?token=exp=1653733405~hmac=b465f7b203eed8d54840a807a5245bb0",
        bgColor: "#b8b3e8"
      }
    ];
    // Edit the code given below and pass data as props to listItem and map over data.
    return (
      <div className="List">
        {/* {data.map((dataItem) => ({
          <ListItem dataItem={dataItem} />
        }))} */}
        {data.map((dataItem) => (
          <ListItem dataItem={dataItem} />
        ))}
      </div>
    );
  }
}

export default List;
