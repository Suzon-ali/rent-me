
import { useParams } from "react-router-dom";
import appartments from "/public/db.json";
import AppartMentDetail from '../components/RoomsAppertMent/AppartMentDetail';
import ErrorPage from "../components/ErrorPgae/ErrorPage";

const AppartMentDetails = () => {
  const { id } = useParams();
  const appartMentId = parseFloat(id);

  const appartment = appartments.find((book) => book.id === appartMentId);

  console.log(appartment)

  //decide what to render

  let content = "";

  if (!appartment) {
    content = (
      <>
        <ErrorPage message={"The book is not availabe"} />
      </>
    );
  } else {
    content = (
      <>
        <AppartMentDetail appartment={appartment} />
      </>
    );
  }

  return content;
};

export default AppartMentDetails;