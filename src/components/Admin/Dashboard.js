import { getDatabase, onValue, ref } from "@firebase/database";
import React, { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";
import { getAuth } from "firebase/auth";
const Dashboard = () => {
  const [postData, setpostData] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;
    const reference = ref(db, uid + "/posts");
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      let postInfo = [];
      for (let id in data) {
        postInfo.push({
          id: id,
          Title: data[id].Title,
          image: data[id].imgLink,
          summary: data[id].Summary,
        });
      }
      setpostData(postInfo);
    });
  }, []);
  console.log(postData);

  return (
    <div className="container container-scroll">
      {postData.length == 0 ? (
        <div></div>
      ) : (
        <div className="container">
          <div className="row">
            {postData.map((data, index) => {
              return (
                <div className="col-4">
                  <DashboardCard
                    imgLink={data.image}
                    Title={data.Title}
                    summary={data.summary.slice(0, 100)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Dashboard;
