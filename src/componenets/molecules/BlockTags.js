import React from "react";

const BlockTags = props => {
  const { blockTags } = props;
  const lis = blockTags.map(t => {
    return <li key={t}>t</li>;
  });
  return <ul className="block-tags">{lis}</ul>;
};

export default BlockTags;
