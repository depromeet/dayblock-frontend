import React from "react";

const BlockMore = props => {
  const { setBlockModalVisible, onClickDelete } = props;
  const handleModifyClick = () => {
    setBlockModalVisible(true);
  };
  return (
    <ul className="block-more">
      <li onClick={onClickDelete}>Delete</li>
      <li onClick={handleModifyClick}>Modify</li>
    </ul>
  );
};

export default BlockMore;
