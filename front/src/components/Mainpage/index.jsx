import React, { useState, useEffect } from "react";
import "./index.css";
import ResourceCards from "../ResourceCards";
import Navigation from "../Navigation";
import Bottom from "../Bottom";
import ImageSliderComponent from "../ImageSlider";


import { GetGames } from "../../utils/FirebaseConnector";


const Index = () => {
  const [resourceCards, setResourceCards] = useState([]);
  const [data, setData] = useState([]);

  useEffect( () => {
    GetGames().then( (returnValue) => {setData(returnValue)});
  }, []);
  console.log(resourceCards);

  return (
    <div>
      <Navigation />
      <div className="main">
        <div className="left-section">
          <div className="popular">Popular Tags</div>
          <div className="browse">Browse</div>
          <div className="games-by-price">Games By Price</div>
        </div>

        <div className="browse-box">
          <h1 className="browse-title">Featured Games</h1>

          <div id="all-images">
            {data &&
              data.map(
                (dataItem) => (
                  <ResourceCards
                    game={dataItem.game}
                    description={dataItem.description}
                    author={dataItem.author}
                    genre={dataItem.genre}
                    platform={dataItem.platform}
                  />
                )
                // <tr key={data.id}>
                //     <td>{data.firstName} {data.lastName}</td>
                //     <td>{data.email}</td>
                //     <td>{user.role}</td>
                // </tr>
              )}
          </div>

          <div className="browse-box">
            <h1 className="browse-title">Fresh Games</h1>

            <div id="all-images">
              {data &&
                data.map(
                  (dataItem) => (
                    <ResourceCards
                      game={dataItem.game}
                      description={dataItem.description}
                      author={dataItem.author}
                      genre={dataItem.genre}
                      platform={dataItem.platform}
                    />
                  )
                  // <tr key={data.id}>
                  //     <td>{data.firstName} {data.lastName}</td>
                  //     <td>{data.email}</td>
                  //     <td>{user.role}</td>
                  // </tr>
                )}
            </div>

            <div className="browse-box">
              <h1 className="browse-title">Featured Jams</h1>

              <div id="all-images">
                {data &&
                  data.map(
                    (dataItem) => (
                      <ResourceCards
                        game={dataItem.game}
                        description={dataItem.description}
                        author={dataItem.author}
                        genre={dataItem.genre}
                        platform={dataItem.platform}
                      />
                    )
                    // <tr key={data.id}>
                    //     <td>{data.firstName} {data.lastName}</td>
                    //     <td>{data.email}</td>
                    //     <td>{user.role}</td>
                    // </tr>
                  )}
              </div>

              <div className="browse-box">
                <h1 className="browse-title"> More Featured Games</h1>

                <div id="all-images">
                  {data &&
                    data.map(
                      (dataItem) => (
                        <ResourceCards
                          game={dataItem.game}
                          description={dataItem.description}
                          author={dataItem.author}
                          genre={dataItem.genre}
                          platform={dataItem.platform}
                          
                        />
                      )
                      // <tr key={data.id}>
                      //     <td>{data.firstName} {data.lastName}</td>
                      //     <td>{data.email}</td>
                      //     <td>{user.role}</td>
                      // </tr>
                    )}
                </div>

                <Bottom />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
