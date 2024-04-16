
import { useParams } from "react-router-dom";
import appartments from "/public/db.json";
import AppartMentDetail from '../components/RoomsAppertMent/AppartMentDetail';
import ErrorPage from "../components/ErrorPgae/ErrorPage";

const AppartMentDetails = () => {
  const { id } = useParams();
  const appartMentId = parseFloat(id);

  const appartMent = appartments.find((book) => book.id === appartMentId);

  //decide what to render

  let content = "";

  if (!appartMent) {
    content = (
      <>
        <ErrorPage message={"The book is not availabe"} />
      </>
    );
  } else {
    content = (
      <>
        <AppartMentDetail appartMent={appartMent} />
      </>
    );
  }

  return content;
};

export default AppartMentDetails;