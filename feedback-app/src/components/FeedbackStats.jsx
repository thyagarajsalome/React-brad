import PropTypes from "prop-types";

const FeedbackStats = ({ feedback }) => {
  // calcuate rating avg
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

FeedbackStats.prototype = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
