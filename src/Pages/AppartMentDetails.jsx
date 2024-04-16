
import { useParams } from "react-router-dom";
import appartments from "/public/db.json";
import AppartMentDetail from '../components/RoomsAppertMent/AppartMentDetail';
import ErrorPage from "../components/ErrorPgae/ErrorPage";
import { Helmet } from "react-helmet";

const AppartMentDetails = () => {
  const { id } = useParams();
  const appartMentId = parseFloat(id);

  const appartment = appartments.find((book) => book.id === appartMentId);


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
      <Helmet>
        <title>AppartMent Details</title>
      </Helmet>
        <AppartMentDetail appartment={appartment} />
      </>
    );
  }


  return content;
};

export default AppartMentDetails;