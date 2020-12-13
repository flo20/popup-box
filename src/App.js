import React, { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import Message from "./components/Message/Message";
import { app } from "./config/firebase.utils";

const db = app.firestore();

const App = () => {
  const [datab, setData] = useState([]);
  //extracting data from firebase
  useEffect(() => {
    const getData = async () => {
      const gettingData = await db.collection("pops").get();
      const snapShots = [];

      gettingData.forEach((pop) => {
        // console.log({...pop.data()});
        snapShots.push({
          id: pop.id,
          ...pop.data(),
        });
      });
      setData(snapShots);
      console.log(snapShots);
    };
    getData();
  }, []);

  return (
    <div>
      <Message datab={datab} />
      <Form />
    </div>
  );
};

export default App;
