import React, {useState, useEffect} from "react";

const ResourceDog = () => {
    
    const [data, setData] = useState({data: []});
    const [err, setErr] = useState('');
    const [data2, setData2] = useState('');
    const [data3, setData3] = useState('');
    const [data4, setData4] = useState('');
    let newid= '';

    useEffect(() => {
        async function getDogs() {
            try {
                const response = await fetch('https://api.thedogapi.com/v1/images/search?has_breeds=1');
                if (!response.ok) {
                    throw new Error(`Error!`);
                }
                const result = await response.json();
                newid = result[0].id;
            } catch (err) {
                setErr(err.message);
            }
            const url="https://api.thedogapi.com/v1/images/" + newid;
            try {
                const response2 = await fetch(url);
                if (!response2.ok) {
                    throw new Error(`Error!`);
                }
                const result2 = await response2.json();
                console.log('result is: ', JSON.stringify(result2, null, 4));
                console.log(result2.url);
                setData(result2.url);
                console.log(result2.breeds[0].name);
                setData2(result2.breeds[0].name);
                console.log(result2);
                console.log(result2.breeds[0].temperament);
                setData3(result2.breeds[0].temperament);
                setData4(result2.breeds[0].life_span);
            } catch (err) {
                setErr(err.message);
            } 

        }
            getDogs();
    },[]); 



  return (
    <div className="imgContained">
      <img src={data} alt='dogimage' style={{width:'100%'}}></img>
      <div className="imgDescription">
        Breed: {data2} <br/>
        Temperament: {data3} <br/>
        Life Span: {data4}

      </div>
    </div>
  );
  
};

export default ResourceDog