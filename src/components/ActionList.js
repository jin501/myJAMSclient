import React from 'react';
import Action from './Action';

const ActionList = ({actions}) => {
  let actionList = ""
  if (actions) {
    actionList = actions.map( action => {
    return (
        <Action
        action={action}
        />
      );
    });
  }

  return (
    <div className="ActionList">
      {actionList}
    </div>
  );
}

export default ActionList;
