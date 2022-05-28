import React from "react";

// Use props to add styles, link and images so that it looks like the reference image.

class ListItem extends React.Component {
  render() {
    const { id, name, link, bgColor, icon } = this.props.dataItem;

    console.log("this.props", this.props);
    return (
      <div className="ListItem" style={{ backgroundColor: bgColor }}>
        <img src={icon} alt={name} />
        <a href={link}>{name}</a>
      </div>
    );
  }
}

export default ListItem;
