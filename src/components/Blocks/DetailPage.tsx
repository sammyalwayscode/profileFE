import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOneProfile } from "../Utils/ApiCalls";

const DetailPage = () => {
  const { id } = useParams();
  console.log(id);

  // get one book
  const getUserprofile = useQuery({
    queryFn: () => getOneProfile(id),
    queryKey: ["single_profile"],
  });

  const profiler = getUserprofile?.data?.data;
  console.log(profiler);

  return (
    <div>
      <div>
        <h1>Detail</h1>

        <h2>Name: {profiler?.name}</h2>
        <h3>Email: {profiler?.email}</h3>
        <h3>Age: {profiler?.age} </h3>
        <h4>Bio: {profiler?.bio}</h4>
        <Link to="/">
          {" "}
          <button>Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default DetailPage;
