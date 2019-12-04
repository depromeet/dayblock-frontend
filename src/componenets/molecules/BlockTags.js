import React from "react";

const BlockTags = props => {
  const { blockTags } = props;
  const lis = blockTags.map((t, idx) => {
    if (t) {
      return <li key={idx}>{t}</li>;
    }
  });
  return <ul className="block-tags">{lis}</ul>;
};

export default BlockTags;
