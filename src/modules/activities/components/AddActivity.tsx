import * as React from 'react';

import { useActivitiesServices } from 'modules/activities';

const AddActivity = () => {
  const [
    { userActivities },
    { addActivity, removeActivity, completeActivity },
  ] = useActivitiesServices();

  console.log({ userActivities });

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    addActivity({
      date: new Date(),
      title: `Activity - ${randomNum}`,
      score: randomNum,
    });
  };

  console.log('userActivities', userActivities);

  return (
    <div>
      <button onClick={handleClick}>Add activity</button>
      {userActivities?.map(({ title, id }) => (
        <div>
          {title} <button onClick={() => removeActivity(id)}>Remove</button> |
          <button onClick={() => completeActivity(id)}>Complete</button>
        </div>
      ))}
    </div>
  );
};

export { AddActivity };
