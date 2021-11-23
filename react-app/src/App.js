import React, { useState } from "react";
import './App.css'
function App(){
    const [paperStyle, setPaperStyle] = useState("paperBefore");  
    const [scissorsStyle, setScissorsStyle] = useState("scissorsBefore");
    const [rockStyle, setRockStyle] = useState("rockBefore");
    const [triangleStyle, setTriangleStyle] = useState("triangleBefore");
    const [shadowStyle, setShadowStyle] = useState("shadowBefore");
    const [imageStyle, setImageStyle] = useState("imageFontBefore");
    const [weaponStyle, setWeaponStyle] = useState("weaponBefore");
    function hadnleClick(weapon,e){
       console.log(weapon ,e.target)
        if(weapon === "paper"){
            setPaperStyle("paperMove")
            setScissorsStyle("scissorsAfter");
            setRockStyle("rockAfter");
            setTriangleStyle("triangleAfter");
            setWeaponStyle("weaponAfter");
            setImageStyle("imageFontAfter")
            setShadowStyle("shadowAfter")
        }  
        if(weapon === "scissors"){
            setScissorsStyle("scissorsMove");
            setPaperStyle("paperAfter");
            setRockStyle("rockAfter");
            setTriangleStyle("triangleAfter");
        } 
        if(weapon === "rock"){
            setRockStyle("rockMove");
            setScissorsStyle("scissorsAfter");
            setPaperStyle("paperAfter");
            setTriangleStyle("triangleAfter");
        }   
    }
    const mainStyle = {
        width: "700px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "150px",
        textAlign: "center"
    };
    /*const weaponStyle = {
        width: "155px",
        height: "155px", 
        position: "absolute", 
        zIndex: "1",
        borderRadius: "100px",
        backgroundColor: "white", 
        textAlign: "center",
        alignItems: "center", 
        display: "flex", 
        justifyContent: "center"
    };*/
    return (
        <div>
            <main style={mainStyle}>
                <div className={triangleStyle}> 
                    <img src={"/images/bg-triangle.svg"} alt="triangle"/>
                </div>
                
                <div onClick={(e)=>hadnleClick("paper",e)} className={paperStyle}>
                    <div className={weaponStyle}>
                        <img className={imageStyle} src={"/images/icon-paper.svg"} alt="" /> 
                    </div>
                </div>
                <div onClick={(e)=>hadnleClick("scissors",e)} className={scissorsStyle}>
                    <div className={weaponStyle}>
                        <img className={imageStyle} src={"/images/icon-scissors.svg"} alt="" />
                    </div>
                </div>
                <div onClick={(e)=>hadnleClick("rock",e)} className={rockStyle}>
                    <div className={weaponStyle}> 
                        <img className={imageStyle} src={"/images/icon-rock.svg"} alt="" />
                    </div>
                </div>
                <div className={shadowStyle}>
                </div>
            </main>
            <footer>
                <div ></div>
            </footer>
        </div>
    );
}

export default App