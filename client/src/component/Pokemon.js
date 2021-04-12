import React, { useEffect, useContext } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Button } from "@material-ui/core";
import Header from "./Header";
import pokemonContext from "../context/context";
import Footer from "./Footer";

function Pokemon() {
  const {details, setDetails,filterdata, setFilterdata,user,pk, setPk} = useContext(pokemonContext)

  useEffect(() => {
      axios.get("https://pokeapi.co/api/v2/pokemon").then((result) => {
        setDetails(result.data.results);
        console.log(details)
        setFilterdata(result.data.results)
      });
    }, []);
    
    const handleChange = (url) => {
      fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPk(json)
        console.log(pk )
      }
      );
  };

  const handleFavourite = (e, url) =>{
    fetch(url)
      .then((response) => {
        axios.post('http://localhost:8080/favdata',{userId : user.uid,pokemonUrl:url  })
          console.log(response)
      })
  }
  return (
    <>
      <Header  details={details} setDetails={setDetails} filterdata={filterdata} setFilterdata={setFilterdata} /> <br />
      <center>
        {
        pk ? (
              <div>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src={`http://pokeres.bastionbot.org/images/pokemon/${pk.id}.png`} alt="Pokemon Image ?" style={{color:"white", textAlign:"center"}}/>
                    </div>
                    <div class="flip-card-back">
                      <br />
                      <h2 style={{textTransform: 'capitalize'}}>
                        <center>{pk.name} </center>
                      </h2>
                      <p> 
                        <h4 style={{textTransform: 'capitalize'}}>Id:{pk.id} <br />Height:{pk.height} &ensp; Weight:{pk.weight}</h4>
                        {
                          pk.abilities && pk.abilities.map((pk)=>{
                            return<>
                              <h4><b>Ability:</b>{pk.ability.name}</h4>
                            </>
                          })
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              ) :("")
        }
      
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "10px",padding: "20px"}}>
        {details && details.length > 0
          ? filterdata.map((i, index) => {
              return (
                <>
                  <center>
                    <div class="container">
                        <div class="row">
                          <Card style={{ boxShadow: "5px 4px 10px white",backgroundColor: "inherit",marginBottom:"20px",display: "flex",marginLeft:"20px",width: "170px", height: "170px",fontFamily: "monospace",paddingLeft:"8px", marginRight:"20px"}} >
                            <CardContent>
                              <Typography>
                                <h5 style={{textAlign:"center", fontWeight:"bolder", fontSize:"20px",color:"black", marginBottom:"40px",textTransform: 'capitalize'}}>{i.name}</h5>
                                <Button variant="contained" color="primary" onClick={(e) => handleChange(i.url)} style={{marginLeft:"1px"}}> Details </Button><br />
                                <Button variant="contained" color="secondary" onClick={(e) => handleFavourite(e,i.url)} style={{marginTop:'10px',marginLeft:"1px"}}> Favourite </Button>
                              </Typography>
                            </CardContent>
                          </Card>
                        </div>
                    </div>
                  </center>
                </>
              );
            })
          : null
        }
      </div>
      </center>
      <Footer />
    </>
  );
}
export default Pokemon;