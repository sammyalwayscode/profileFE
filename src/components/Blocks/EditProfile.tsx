import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { getOneProfile, updateProfile } from "../Utils/ApiCalls";
import { useState } from "react";

const EditProfile = () => {
  const { id } = useParams();
  console.log(id);
  const client = useQueryClient();
  const [bio, setBio] = useState("");

  // const getPreviousProfile = useQuery({
  //   queryFn: () => getOneProfile(id),
  //   queryKey: ["prevProfileGet", id],
  // });

  // const prevProf = getPreviousProfile?.data?.data;
  // console.log(prevProf);
  // const [prev, setPrev] = useState({
  //   bio: prevProf?.bio || "",
  // });

  const updateData = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["updateProfile"] });
      console.log("Updated");
    },
  });

  const handleUpdate = (id: any) => {
    updateData.mutate({ bio, ...id });
    console.log("Up 222");
  };

  return (
    <div>
      <ButtomInput>
        <textarea
          name="bio"
          placeholder="Enter Your Bio"
          value={bio}
          onChange={(e) => {
            setBio(e.target.value);
            console.log(bio);
          }}
        ></textarea>
        <button
          onClick={() => {
            handleUpdate(id);
            console.log("CLicked");
          }}
        >
          Update Profile
        </button>
      </ButtomInput>
      <Link to="/">
        <button>Back Home</button>
      </Link>
    </div>
  );
};

export default EditProfile;

const ButtomInput = styled.div`
  button {
    width: 965px;
    background-color: #4285f4;
    height: 35px;
    border-radius: 3px;
    transition: all 350 ms;
    text-align: center;

    :hover {
      transform: scale(1.1);
    }
  }

  textarea {
    height: 60px;
    width: 97.5%;
  }
`;
