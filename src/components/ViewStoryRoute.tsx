import { useContext } from "react";
import { useParams } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import Story from "../models/Story";
import "./ViewStoryRoute.css";

const ViewStoryRoute = () => {
  const id: string | undefined = useParams().id;
  const { stories } = useContext(StoriesContext);
  const story: Story | undefined = stories.find(
    (story) => story.id === parseInt(id!)
  );

  return (
    <div className="ViewStoryRoute">
      {story && (
        <>
          <h2>Mad Lib by: {story.author}</h2>
          <p>
            On my way to the {story.word1}, I met {story.word2}.
          </p>
          <p>
            They were in quite a hurry because they were meeting {story.word3},
            the {story.word4}, in {story.word5} minutes!
          </p>
          <p>So we said, "{story.word6}" and parted ways.</p>
        </>
      )}
    </div>
  );
};

export default ViewStoryRoute;
