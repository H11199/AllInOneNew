import { getDatabase, onValue, ref } from "@firebase/database";
import React, { useEffect, useState } from "react";
import HomePageTop from "./HomePageTop";
import MainBoard from "./MainBoard";
import Footer from "./Footer";
import { getAuth } from "firebase/auth";
function HomePage() {
  const [postData, setpostData] = useState([]);
  useEffect(() => {
    const db = getDatabase();

    const reference = ref(db, "posts");
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      let postInfo = [];
      for (let id in data) {
        postInfo.push({
          id: id,
          Title: data[id].Title,
          Date: data[id].Date,
          image: data[id].imgLink,
          summary: data[id].Summary,
        });
      }
      setpostData(postInfo);
    });
  }, []);
  return (
    <div>
      <div className="main">
        <section>
          <HomePageTop />
        </section>
        <section>
          <div
            className="container-homepage row justify-content-md-center"
            id="id1"
          >
            {postData.length == 0 ? (
              <div></div>
            ) : (
              <div className="col-12 col-md-8 col-posts-home">
                <div>
                  {postData.map((data, index) => {
                    return (
                      <MainBoard
                        imglink={data.image}
                        title={data.Title}
                        date={data.Date}
                        postsummary={data.summary.slice(0, 350)}
                        toLink={`/post/${data.id.substring(1)}`}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;
